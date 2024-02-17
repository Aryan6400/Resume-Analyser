from rest_framework import serializers
from .models import Resume, ExtractedText

class ExtractedTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtractedText
        fields = ('text','url')

class ResumeSerializer(serializers.ModelSerializer):
    extracted_texts = ExtractedTextSerializer(many=True)

    class Meta:
        model = Resume
        fields = ('role', 'jd', 'extracted_texts')

    def create(self, validated_data):
        extracted_texts_data = validated_data.pop('extracted_texts', [])  
        resume = Resume.objects.create(**validated_data)  
        for extracted_text_data in extracted_texts_data:
            ExtractedText.objects.create(resume=resume, **extracted_text_data)
        return resume
