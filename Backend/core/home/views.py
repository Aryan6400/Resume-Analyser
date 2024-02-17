from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from PyPDF2 import PdfReader
from io import BytesIO
from openai import OpenAI
from dotenv import load_dotenv, dotenv_values
# from .models import Resume
# from .serializers import ResumeSerializer

config=dotenv_values(".env")

client = OpenAI(api_key=config['OPENAI_API_KEY'])

def scoreResume():
    response=client.chat.completions.create(
        model='gpt-4-0125-preview',
        messages=[
            {"role": "system", "content": "You are a helpful assistant who receives a text which contains a job role, a job description and a resume data parsed from a pdf. Your job is to give a job relevancy score to the resume out of 100."},
            {"role": "user", "content": "Job: Full Stack Engineer \n Job Description: We are seeking an enthusiastic and motivated Full Stack Engineer to join our team. This is an entry-level position, perfect for individuals who are passionate about web development and are eager to learn and grow in a supportive environment. Requirements: Bachelor’s degree in Computer Science or a related field. 0-1 years of experience in web development. Proficiency in front-end technologies such as HTML, CSS, JavaScript, and React. Understanding of back-end languages and frameworks such as django and Spring Boot. Familiarity with database technology such as MySQL and MongoDB. Experience with version control systems like Git. Experience with cloud platforms like AWS. Excellent problem-solving skills and attention to detail. Strong organizational and project management skills. Ability to work in a team setting and independently when required. \n Resume Data : SKILLSANDEXPERTISE\nAWARDSANDACHIEVEMENTS\nCOMPETITION/CONFERENCE\nCOURSEWORKINFORMATION\nCERTIFICATIONS\nPOSITIONSOFRESPONSIBILITY\nEXTRACURRICULARACTIVITIESARYAN|20CE10015\nCIVILENGG.(B.Tech4Y)\nsingharyan7481@gmail.com|7033099577\nEDUCATION\nYear Degree/Exam Institute CGPA/Marks\n2024 B.TECH IITKharagpur 7.80/10\n2020 AISSCE RNPPublicSchool 93.6%\n2018 AISSE RamakrishnaMissionVidyapith 93%\nPROJECTS\nProgressiveChatApp June,23\nProgressiveWebApp|SelfProject\n•Createdafully-responsiveProgressiveWebAppofastartup'schatapplicationinReact.jsandTypescriptwithPaginationusinghooks\n•Integratedofflinefunctionality,notificationsandcachestorageusingServiceWorkersandmadetheappinstallableondevice\n•ImplementedfrontendusingChakraUIcreatingtheappresponsiveforalldevicesandusedDynamicAPIstofetchchats\nGoogleKeepCloneWebApp May,23\nSelfProject|MERNStackWebApp\n•DevelopedawebappreplicatingGoogleKeep,enablinguserstologinusingpassport.jswithauthenticationandsession-basedauthorization\n•UsedReact.jsforfrontendandenabledsmoothfunctionalityusingreact-routersandhooksandcreatedRESTfulAPIsforseamlesscommunication\n•UtilisedMongoDBwithNode.jsandExpress.jstostoreandmanipulatedatadynamically,withreal-timeupdatestothedatabaseandfurtheroptimised\nperformancewithdatabaseindexing\n•Addedanewteamcollaborationfunctionalityenablinguserstojointeamsandcollaboratewithteammatesoncommonprojects\nProgrammingLanguages:Javascript,Typescript,Python,C,C++,HTML,CSS,Node.js,Express.js,Mongodb,React.js\nTools&Libraries:Git,VSCode,Redux,Passport.js,RESTfulAPI,Multer,JQuery,EJS,Mongoose\n•Stoodamongthetop3.5%ofthecandidateswhoappearedfortheJEEAdvanced,2020examinationbysecuring5374rank\n•Stoodamongthetop0.8%ofthecandidateswhoappearedfortheJEEMains,2020examinationbysecuring9898rank\n•A3-star(1436ratings)ratedprofileonCodeChefunderusername\"aryan6400\"\n•Secured4726rankinCodeKazeround2,anation-widecodingcontest,among1.4lacparticipantsandacollegerankof41among200+collegestudents\nMercorStartupGatewayHackathon July,23\n•Participatedina2-dayhackathoninateamof3andworkedonafull-stackproblemstatementrevolvingaroundcreatingacentralisedappforhealthcare\nsystemtostoremedicalhistoryanddatabaseofpatients\n•CreatedfrontendoftheappwithReact.jsandMaterialUIwhileusingReduxandContextAPIforstatemanagement\n•IntegratedauthenticationusingJWTTokenswithAuth0andworkedonNode.jsandMongodbdatabaseusingRESTAPIs\n•Pitchedthebusinessideaina5minvideoforthepanelofjudgesandcreatedathoroughdocumentationontheproblemstatementandthesolution\nAcademicCoursework:ProgrammingandDataStructures|LinearAlgebra,NumericalandComplexAnalysis|ProbabilityandStatistics|Machine\nLearningFoundationsandApplications|Economics\nOnlineCourses:MachineLearningwithPython:ZerotoGBMs(JovianAI)|DeepLearningwithPytorch:ZerotoGANs|TheCompleteWebDevelopment\nBootcamp-ByDrAngelaYu|React-TheCompleteGuide2023-ByAcademind\nSoftwareEngineeringVirtualExperienceProgram|GoldmanSachs June,23\n•SkillsAcquired:AuthenticationandSecurity|PasswordEncryption|WebSecurity|DatabaseAnalysis\nVirtualInternship|Entrepreneurship&Innovation:WebDevelopment|MoretonBay May,23\n•SkillsAcquired:ClientManagement|SiteMapandUI/UX|TrendAnalysis|Prototyping|DesignThinking.\nGeneralSecretarySocialandCultural|VidyasagarHallofResidence July,22-July,23\n•Electedrepresentativeof330+boardersanddirectlyresponsibletomanageSocialandCulturaleventsinhall\n•Managedtheoverallbudgetof5.54lacand4secretariesand1coordinatorallocatedfortheSocialandCulturalevents\n•Led18teamscomprisingatotalof95participantsinGeneralChampionship2023against20otherhallswinning6podiumsandFilmMakingCupforthe\nfirsttimeandalsoledthehalltowinningGoldintheRangolicompetitionagainst20otherhalls.\nSports:\n•MemberofSilverwinningBridgeteamofVidyasagarHallamong20hallsintheGeneralChampionship2023\nSocialandCultural:\n•MemberofGoldwinningShortFilmMakingteamofVidyasagarHallamong20hallsintheGeneralChampionship2023\n•CaptainofSilverwinningStagePlayteamandOverallCoordinatorofGoldwinningRangoliteamofVidyasagarHallamong20hallsinGeneral\nChampionship2023\nTechnology:\n•MemberofOpenSoftteamofVidyasagarHallsecuring4thpositionamong20hallsinGeneralChampionship2023\n•NCC:AsanNCCcadetof1BengalEMECoyNCCIITKharagpur,workedtowardssocialawarenesslikecomingupwithideasonutilizingandconserving\nrainwaterandmakingposterson\"Someimportantwaystokeepourplanethealthy\"and\"wastemanagement\"\n"}
        ]
    )
    print(response.choices[0].message.content)

scoreResume()

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



        # serializer = ResumeSerializer(data=data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(data, status=status.HTTP_201_CREATED)
