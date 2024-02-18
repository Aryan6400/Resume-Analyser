from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from PyPDF2 import PdfReader
from io import BytesIO
from openai import OpenAI
from dotenv import dotenv_values
import json
from home.utils import function_descriptions, scoring_function

config=dotenv_values(".env")

client = OpenAI(api_key=config['OPENAI_API_KEY'])

def getScore(data):
    score=0
    max_score=0
    score=score+data["tech_skill_score"]["total_score"]+data["soft_skill_score"]+data["educational_score"]+data["courses_score"]+data["achievement_score"]
    max_score=max_score+data["tech_skill_score"]["max_score"]+data["soft_skill_score"]+7+data["courses_score"]+data["achievement_score"]
    temp=0
    for i in range(len(data["project_score"])):
        temp+=data["project_score"][i]
    temp=temp/len(data["project_score"])
    score+=temp
    max_score+=10
    temp=0
    for i in range(len(data["experience_score"])):
        temp+=data["experience_score"][i]
    temp=temp/len(data["experience_score"])
    score+=temp
    max_score+=10
    result=round((score/max_score)*100)
    return result

def getResumeDetails(resume, role, jd):
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

def scoreResume(resume, role, jd):
    response=client.chat.completions.create(
        model='gpt-4-0125-preview',
        messages=[
            {"role": "user", "content": f"Job: {role} \n Job Description: {jd} \n Resume: \n{resume}"}
        ],
        functions=scoring_function,
        function_call="auto"
    )
    data = json.loads(response.choices[0].message.function_call.arguments)
    score=getScore(data)
    details=None
    if score>70:
        details=getResumeDetails(resume, role, jd)
    return {"verdict":details, "name":data["name"], "email":data["email"], "score":score}


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
            initial_result[i]={"verdict":res["verdict"], "score":res["score"], "name":res["name"], "email":res["email"], "url":data["urls"][i]}

        result = sorted(initial_result, key=lambda x: x["score"], reverse=True)

        return Response(result, status=status.HTTP_201_CREATED)
