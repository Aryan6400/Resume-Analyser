function_descriptions = [
    {
        "name": "analyse_resume",
        "description": "Scans a resume and returns relevant information. If any of the asked information is not found, return an empty string.",
        "parameters":{
            "type": "object",
            "properties":{
                "name":{
                    "type": "string",
                    "description": "Name of the Person"
                },
                "email":{
                    "type": "string",
                    "description": "Email of the Person"
                },
                "college_detail":{
                    "type": "object",
                    "properties":{
                        "name":{
                            "type": "string",
                            "description":"Name of the College"
                        },
                        "branch":{
                            "type": "string",
                            "description":"Name of the branch or department or major"
                        },
                        "degree":{
                            "type": "string",
                            "description": "Degree or Certificate"
                        },
                        "cgpa":{
                            "type": "string",
                            "description": "Latest CGPA/CPI of the person in the college"
                        },
                        "start":{
                            "type":"string",
                            "description":"Enrolment time/Start Date in the college for the person. Format should be MM-YYYY"
                        },
                        "end":{
                            "type":"string",
                            "description":"Graduation time/End Date of the college for the person. Format should be MM-YYYY"
                        }
                    },
                    "description": "College Details of the person from the resume. The details include the provided properties. If any property is not found, return an empty string."
                },


                "projects":{
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties":{
                            "title":{
                                "type": "string",
                                "description":"Name/Title of the Project"
                            },
                            "short_description ":{
                                "type": "string",
                                "description":"Short description of the project. No need to focus on the tech stack because we are providing tech stack as separate array."
                            },
                            "tech_stack":{
                                "type": "array",
                                "items": {
                                    "type":"string",
                                    "description":"Name of the tech stack"
                                },
                                "description":"A list of all the tech stacks and tools used in the project. If no tech stack found, return empty array."
                            },
                            "time_duration":{
                                "type":"object",
                                "properties":{
                                    "start":{
                                        "type":"string",
                                        "description":"Start date of the project in MM-YYYY. If no month, then return year in YYYY"
                                    },
                                    "end":{
                                        "type":"string",
                                        "description":"End date of the project in MM-YYYY. If no month, then return year in YYYY"
                                    },
                                    "duration":{
                                        "type":"string",
                                        "description":"Duration of the project in months. If you have start and end date, calculate duration from them."
                                    }
                                }
                            },
                            "relevancy_score":{
                                "type":"string",
                                "description":"Relevancy score of the project for the given Role and Job Description. Score should be between 0-5. Score 0 for completely irrelevant and 5 for highly relevant"
                            }
                        }
                    },
                    "description": "Project Details of the person from the resume. The details include the provided properties. If any property is not found, return an empty string."
                },


                "professional_experience":{
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties":{
                            "role":{
                                "type": "string",
                                "description":"Role of the person in the job/internship work"
                            },
                            "organisation ":{
                                "type": "string",
                                "description":"Name of the organisation"
                            },
                            "short_description ":{
                                "type": "string",
                                "description":"Short description of the job/internship work. No need to focus on the tech stack because we are providing tech stack as separate array."
                            },
                            "tech_stack":{
                                "type": "array",
                                "items": {
                                    "type":"string",
                                    "description":"Name of the tech stack"
                                },
                                "description":"A list of all the tech stacks and tools used in the job/internship work. If no tech stack found return empty array."
                            },
                            "time_duration":{
                                "type":"object",
                                "properties":{
                                    "start":{
                                        "type":"string",
                                        "description":"Start date of the job/internship work in MM-YYYY. If no month, then return year in YYYY"
                                    },
                                    "end":{
                                        "type":"string",
                                        "description":"End date of the job/internship work in MM-YYYY. If no month, then return year in YYYY"
                                    },
                                    "duration_months":{
                                        "type":"string",
                                        "description":"Duration of the job/internship work in months. If you have start and end date, calculate duration from them."
                                    }
                                }
                            },
                            "relevancy_score":{
                                "type":"string",
                                "description":"Relevancy score of the job/internship work for the given Role and Job Description. Score should be between 0-5. Score 0 for completely irrelevant and 5 for highly relevant"
                            }
                        }
                    },
                    "description": "Professional experience details of the person from the resume. The details include the provided properties. If any property is not found, return an empty string."
                },

                "resume_score":{
                    "type":"number",
                    "description":"""Relevancy score of the resume for the given Role and Job Description. Score should be between 0-100. Score the given resume based on the provided method for evaluating technical skills, soft skills, educational background, projects/hackathons, past experiences, coursework, certifications, achievements, and DSA/competitive programming background.

                    1. Technical Skills and Tools Matching:
                    - Assign a score of 2.5 for must-have skills, and 1 for good-to-have or bonus skills. For all the skills in resume matching with those mentioned in the job description add the scores to get total score for this section. The max_score for this section would be 2.5*(no. of required skills in jd) + 1*(no. of bonus skills in jd)

                    2. Soft Skills:
                    - Assign a score of 0.25 for each soft skill in jd. Give a score of 0.25 for demonstrated usage or cultivation of the soft skill in extracurricular activities or positions of responsibility. Total score for this section would be 0.25*(no. of matching soft skills). Max score here would be 0.25*(no. of soft skills)

                    3. Educational Details:
                    - Evaluate based on factors like CGPA, branch, degree, and college. Branch close to the jd scores more. High cgpa also scores more. If the college is very good, the score is more. Assign a score out of 7, considering the relevance to the job description and the reputation of the educational institution. Max score = 7.

                    4. Projects/Hackathons:
                    - Assign a score out of 10 for each project/hackathon based on relevance to the job description, technical keywords matching, and domain alignment. A project can have a score of 0 if it's domain doesn't align with the job. Like a case study project for a software role. Sum and average them to get a score out of 10. Max score here is 10.

                    5. Past Experiences/Jobs/Internships:
                    - Evaluation is same as project with some extra factors like duration, mode (remote or onsite), and the reputation of the companies. Assign a score out of 10. Here also an experience can have 0 score. Sum and average them to get a score out of 10. Max score here is 10.

                    6. Coursework:
                    - Assign a score out of 0.25 for relevant coursework. Only consider those courses if they are relevant course and if they are good, you can give a score of 0.25 for that. score=0.25*(no of relevant courses) and max score=0.25*(no. of relevant courses)

                    7. Certifications:
                    - Same as coursework with score of 0.25. Relevance and level of certifications also matter. Some are better than others and have a weightage of 0.5 like AWS certificates or high level/advanced technical certifications like DevOps, deep learning or CFA for finance profile etc.

                    8. Achievements:
                    - Consider relevant achievements aligned with the job description. Assign a score out of 0.5.

                    9. DSA and Competitive Programming Background:
                    - Evaluate based on ratings in coding platforms and ranks in coding competitions. Assign a score of 0.5 for a strong background in DSA or competitive programming. Good background include high ratings in cp platforms like codechef, codeforces, leetcode, atcoder, etc. Good ranks in coding competitions are also good and have 0.5 score. ICPC, hackercup, kickstart has a score of 0.75 only if very good global rank is given.

                    Calculate the total score by adding scores from all sections and keep a total max score by adding max score of all sections for normalization. Divide the total score by the max total score and scale it to a score out of 100.
                    You have to follow this method but also do your own magic to make the score as perfect and close as possible.
                    """
                }
            },
            "required": ["name", "resume_score", "relevancy_score"]
        }
    }
]