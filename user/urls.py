from django.urls import path,re_path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve


urlpatterns = [
    path('', home),
    path("about",about),
    path("contact",contact),
    path("admissions",addmission),
    path("gallery",gallery),
    path("blog",blog),
    path("blog-detail/<int:id>",blogDetail),
    path("notice",notice),
    path("alumni",alumni),
    
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)