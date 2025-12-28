from django.shortcuts import render,redirect
from .models import *
from .additionalFn import *







def home(request):
    stats = Home_page_stats.objects.all()
    carousel = Carousel_Items_students.objects.all().values("Title","Image")
    Why_choose = Home_Why_Choose_Us.objects.all().values()
    data = Official_detail.objects.all().values()
    grouped_carousel = list(chunked(carousel, 3))
    
    data_dict = {"data":stats[0],"grouped_carousel": grouped_carousel,"carousel":carousel,"maindata":data[0],"choose":Why_choose}
    return render(request,"index.html",data_dict)


def about(request):
    about_data = About_page.objects.all().values()
    values = values_section.objects.all().values()
    maindata = Official_detail.objects.all().values()
    data = {"data":about_data[0],"values":values,"maindata":maindata[0]}
    return render(request,"about.html",data)

def contact(request):
    
    if (request.method == "POST"):
        name = request.POST.get("name")
        email = request.POST.get("contactEmail")
        subject = request.POST.get("subject")
        message = request.POST.get("contactMessage")
        phone = request.POST.get("contactPhone")
        
        data = Contact_querries(name = name,email = email,subject = subject, message = message, phone = phone)

        data.save()
        return redirect("/")
    contact_details = Official_detail.objects.all().values()
    maindata = Official_detail.objects.all().values()
    office_hours = Office_Hours.objects.all().values()

    data = {"contact":contact_details[0],"office_hours":office_hours,"maindata":maindata[0]}
    return render(request,"contact.html",data)


def addmission(request):
        if (request.method == "POST"):
            
            student_first_name = request.POST.get("firstName")
            student_last_name = request.POST.get("lastName")
            student_last_gender = request.POST.get("gender")
            student_date_of_birth = request.POST.get("dob")
            grade_applying_for = request.POST.get("class")
            previous_school = request.POST.get("previousSchool")
            
            # guardian info
            
            Guardian_name = request.POST.get("parentName")
            Guardian_relation = request.POST.get("relationship")
            Guardian_email = request.POST.get("email")
            Guardian_mobile = request.POST.get("phone")
            address = request.POST.get("address")

            comments = request.POST.get("message")
            
            data = Addmission_form(student_first_name = student_first_name, student_last_name = student_last_name,student_last_gender = student_last_gender,student_date_of_birth = student_date_of_birth,grade_applying_for = grade_applying_for,previous_school = previous_school,Guardian_name = Guardian_name, Guardian_email = Guardian_email, Guardian_mobile = Guardian_mobile,address = address,comments = comments,Guardian_relation = Guardian_relation)

            data.save()
            return redirect("/")
        
        addmission_process = admission_proces.objects.all().values()
        documents = required_document.objects.all().values()
        important_dates = important_date.objects.all().values()
        maindata = Official_detail.objects.all().values()

        data = {
            "addmission_process":addmission_process,
            "documents":documents,
            "important_dates":important_dates,
            "maindata":maindata[0]
        }
    
        return render(request,"admissions.html",data)


def gallery(request):
    gallery_items = Gallery_Item.objects.all().values()
    maindata = Official_detail.objects.all().values()
    return render(request,"gallery.html",{"gallery_items":gallery_items,"maindata":maindata[0]})

def blog(request):
    maindata = Official_detail.objects.all().values()
    blogs = Blog_Item.objects.all().values()
    return render(request,"blog.html",{"miandata":maindata[0],"blogs":blogs})

def blogDetail(request,id):
    blog_detail = Blog_Item.objects.filter(id = id).values()
    maindata = Official_detail.objects.all().values()
    return render(request,"blog-detail.html",{"maindata":maindata[0],"post":blog_detail[0]})

def notice(request):
    maindata = Official_detail.objects.all().values()
    notice = Notice_Items.objects.all().values() 

    return render(request,"notice.html",{"notices":notice,"maindata":maindata[0]})

def alumni(request):
    return render(request,"alumni.html")
