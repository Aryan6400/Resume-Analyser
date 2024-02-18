# Resume-Analyser

This web-based application based on React.js provides a user-friendly interface for recruiters to hire best candidates from a large pool of resumes.

**How to use:**

**Client:**

Clone and start the react application on port 3000 since this port is mentioned in the backend files to handle cors issues.

Upload resumes in pdf format, provide the role name and job description and see the magic. All the resumes will be analysed and a score will be assigned. If a resume has score more than 70, then it passes the mark and it's details will be returned in json format and displayed in the details tab. No authentication is required and no database is used. This means the data is temporary and will disappear if refreshed. The resumes are uploaded on the firebase storage to get a url for the file.

**Server:**

In the backend, Django-Rest-Api is used to create REST APIs and json response handling. OpenAI api is used to analyse the resumes and get the details. The latest gpt-4 model "gpt-4-0125-preview" is used with function calling to get the most optimised results. PYPDF2 library is used to extract the data feom pdf.

To start the server, create a virtual library using pipenv and install django and DRF in the environment. Navigate to core directory and start the server by running "python manage.py runserver". The model and serializer files contain code for database models and serializers but are not used since this project doesn't require data persistence.
