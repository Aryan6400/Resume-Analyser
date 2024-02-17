from django.db import models

class Resume(models.Model):
    role = models.TextField()
    jd = models.TextField()
    

class ExtractedText(models.Model):
    resume = models.ForeignKey(Resume, related_name='extracted_texts', on_delete=models.CASCADE)
    text = models.TextField()
    url = models.URLField()