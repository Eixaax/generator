from django.db import models
from django.contrib.auth.models import User

class Requests(models.Model):
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(null=True, blank=True,upload_to='images/')

    def __str__(self):
        return self.user.username

class PersonalInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.ForeignKey('Types', on_delete=models.CASCADE)
    current_date = models.DateField()
    case_number = models.CharField(max_length=50)
    full_name = models.CharField(max_length=100)
    birthdate = models.DateField()
    range = models.ForeignKey('Ranges', on_delete=models.CASCADE)
    address = models.CharField(max_length=50)
    sex_gender = models.ForeignKey('Genders', on_delete=models.CASCADE)
    marital_status = models.ForeignKey('MaritalStatus', on_delete=models.CASCADE)
    educational_attainment = models.ForeignKey('EducAttain', on_delete=models.CASCADE)
    means_of_income = models.CharField(max_length=200)
    estimated_income = models.ForeignKey('EstIncome', on_delete=models.CASCADE)
    money = models.CharField(max_length=250)
    problem = models.CharField(max_length=250)
    document = models.FileField(upload_to='static/documents/') 

    def __str__(self):
        return self.full_name

class Genders(models.Model):
    gndr_name = models.CharField(max_length=50)

    def __str__(self):
        return self.gndr_name
    
class Types(models.Model): 
    type_name = models.CharField(max_length=50)

    def __str__(self):
        return self.type_name

class MaritalStatus(models.Model):
    maritals_name = models.CharField(max_length=50)

    def __str__(self):
        return self.maritals_name

class EducAttain(models.Model):
    educ_name = models.CharField(max_length=50)

    def __str__(self):
        return self.educ_name

class Ranges(models.Model):
    ranges_name = models.CharField(max_length=50)
    range1 = models.CharField(max_length=50)
    range2 = models.CharField(max_length=50)
    ranges_details = models.CharField(max_length=50)

    def __str__(self):
        return self.ranges_name

class EstIncome(models.Model):
    est_income_name = models.CharField(max_length=50)
    est_income_details = models.CharField(max_length=50)

    def __str__(self):
        return self.est_income_name
 