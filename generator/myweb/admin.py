from django.contrib import admin
from .models import PersonalInfo, Genders,Types,Ranges,MaritalStatus,EstIncome,EducAttain, Requests, Profile

admin.site.register(PersonalInfo),
admin.site.register(Requests),
admin.site.register(Profile),
admin.site.register(Genders),
admin.site.register(Types),
admin.site.register(Ranges),
admin.site.register(MaritalStatus),
admin.site.register(EstIncome),
admin.site.register(EducAttain),
