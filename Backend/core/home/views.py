from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from PyPDF2 import PdfReader
from io import BytesIO
from openai import OpenAI
from dotenv import dotenv_values
import json
from home.utils import function_descriptions

config=dotenv_values(".env")

client = OpenAI(api_key=config['OPENAI_API_KEY'])

def scoreResume(resume, role, jd):
    response=client.chat.completions.create(
        model='gpt-4-0125-preview',
        messages=[
            {"role": "user", "content": f"Job: {role} \n Job Description: {jd} \n Resume: \n{resume}"}
        ],
        functions=function_descriptions,
        function_call="auto"
    )
    data = json.loads(response.choices[0].message.function_call.arguments)
    return data


class index(APIView):
    def post(self, request, format=None):
        role = request.data.get('role')
        jd = request.data.get('jd')
        urls = request.data.getlist('urls')
        files = request.FILES.getlist('resumes')
        extracted_texts = []
        for file_obj in files:
            file_content = file_obj.read()
            pdf_reader = PdfReader(BytesIO(file_content))
            extracted_text = ''
            for page_num in range(len(pdf_reader.pages)):
                extracted_text += pdf_reader.pages[page_num].extract_text()
            extracted_texts.append(extracted_text)

        data = {
            'role': role,
            'jd': jd,
            'urls' : urls,
            'extracted_text': extracted_texts
        }

        initial_result = [None] * len(data["extracted_text"])

        for i in range(len(data["extracted_text"])):
            res=scoreResume(data["extracted_text"][i], data["role"], data["jd"])
            initial_result[i]={"verdict":res, "url":data["urls"][i]}

        result = sorted(initial_result, key=lambda x: x["verdict"]["resume_score"], reverse=True)

        return Response(result, status=status.HTTP_201_CREATED)
