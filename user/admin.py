from django.contrib import admin
from .models import *

# Register your models here.


admin.site.site_header = "Gyanodaya Admin"


admin.site.register([Gallery_Item,Blog_Item,Notice_Items,Official_detail,About_page,Pride_Of_students,Contact_querries,Addmission_form,Home_page_stats,Carousel_Items_students,values_section,Home_Why_Choose_Us,admission_proces,required_document,important_date,Office_Hours])