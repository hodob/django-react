from rest_framework import serializers
from .models import DjangoMigrations, DjangoContentType

"""
# ModelSerializer 나중에 사용
class DjangoMigrationsSerializers(serializers.Serializer):
    app = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    applied = serializers.DateTimeField()
    def create(self, validated_data):
"""
        # Create and return a new `Snippet` instance, given the validated data.
"""
        return DjangoMigrations.objects.create(**validated_data)
    def update(self, instance, validated_data):
"""
        # Update and return an existing `Snippet` instance, given the validated data.
"""
        instance.app = validated_data.get('app', instance.app)
        instance.name = validated_data.get('name', instance.name)
        instance.applied = validated_data.get('applied', instance.applied)
        instance.save()
        return instance
"""

class DjangoMigrationsSerializers(serializers.ModelSerializer):
    class Meta:
        model = DjangoMigrations
        fields = ['id', 'app', 'name', 'applied']

class DjangoContentTypeSerializers(serializers.ModelSerializer):
    class Meta:
        model = DjangoContentType
        fields = ['id', 'app_label', 'model']
