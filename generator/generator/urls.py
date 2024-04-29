"""generator URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myweb import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.landingPage,name='landing'),
    path('home/', views.homepage, name = 'home' ),
    path('results/', views.results, name = 'result' ),
    path('adminPage/', views.adminPage, name = 'admin' ),
    path('generate/', views.generator, name = 'generate' ),
    path('save/',views.save,name='save'),
    path('edit/',views.edit,name='edit'),
    path('filter/', views.filter, name='filter'),
    path('search/', views.search, name='search'),
    path('search-file/', views.search_file, name='search-file'),
    path('get/', views.get, name='get'),
    path('add-gender/', views.addGen, name='add-gender'),
    path('add-range/', views.addRange, name='add-range'),
    path('add-marital/', views.addMar, name='add-marital'),
    path('add-educ/', views.addEduc, name='add-educ'),
    path('add-social/', views.addSocial, name='add-social'),
    path('del-gender/', views.delGen, name='del-gender'),
    path('del-marital/', views.delMar, name='del-marital'),
    path('del-range/', views.delRange, name='del-range'),
    path('del-educ/', views.delEduc, name='del-educ'),
    path('del-social/', views.delSocial, name='del-social'),
    path('fetch-gender/', views.fetchGen, name='fetch-gender'),
    path('fetch-marital/', views.fetchMar, name='fetch-marital'),
    path('fetch-ranges/', views.editRanges, name='fetch-ranges'),
    path('fetch-educ/', views.fetchEduc, name='fetch-educ'),
    path('fetch-social/', views.fetchSocial, name='fetch-social'),
    path('accept-request/', views.fetchRequest, name='accept-request'),
    path('decline-request/', views.deleteRequest, name='decline-request'),
    path('save-document/', views.save_document, name='save-document'),
    path('fetch-Recom/', views.genRecom, name='fetch-Recom'),
    path('login/',views.logins,name='login'),
    path('create/',views.create,name='create'),
    path('request/',views.requestAcc,name='request'),
    path('about/',views.AboutPage,name='about'),
    path('contact/',views.ContactPage,name='contact'),
    path('logout/',views.logoutview,name='logout'),
    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
