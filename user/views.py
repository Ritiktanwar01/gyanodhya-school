from django.shortcuts import render



def home(request):
    return render(request,"index.html")


def about(request):
    return render(request,"about.html")

def contact(request):
    return render(request,"contact.html")


def addmission(request):
    return render(request,"admissions.html")


def gallery(request):
    return render(request,"gallery.html")

def blog(request):
    return render(request,"blog.html")

def blogDetail(request):
    return render(request,"blogDetail.html")

def notice(request):
    return render(request,"notice.html")

def alumni(request):
    return render(request,"alumni.html")
