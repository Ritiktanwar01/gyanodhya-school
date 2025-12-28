from django.shortcuts import render,redirect



def Login(request):
    return render(request,"admin/login.html")


def Dashboard(request):
    return render(request,"admin/admin-dashboard.html")


def blogs(request):
    
    return render(request,"admin/blogs.html")


def blogs_create(request):
    if (request.method == "post"):
        # create new item
        pass
    return render(request,"admin/blog-create.html")

def blogs_edit(request,id):
    if (request.method == "put"):
        # edit content
        pass
    return render(request,"admin/blog-edit.html")

def blogs_view(request,id):

    return render(request,"admin/blog-view.html")

def blogs_delete(request,id):

    return redirect("/admin/blogs")



def admissions(request):
    return render(request,"admin/admissions.html")

def create_admission(request):
    if (request.method == "post"):
        # create new item
        pass
    return render(request,"admin/admission-create.html")

def edit_admission(request,id):
    if (request.method == "put"):
        # create edit item
        pass
    return render(request,"admin/admission-edit.html")


def view_admission(request,id):
    
    return render(request,"admin/admission-edit.html")


def delete_admission(request,id):
    
    return redirect("/admin/admissions")




def gallery(request):

    return render(request,"admin/gallery.html")


def gallery_create(request):
    if (request.method == "post"):
        # create content
        pass
    return render(request,"admin/gallery-create.html")

def gallery_edit(request,id):
    if (request.method == "put"):
        # edit content
        pass
    return render(request,"admin/gallery-edit.html")

def gallery_view(request,id):
    
    return render(request,"admin/gallery-view.html")


def gallery_delete(request,id):
    
    return redirect("/admin/gallery")



def notices(request):
    if (request.method == "delete"):
        # delete content
        pass
    return render(request,"admin/notices.html")

def notices_view(request,id):
    
    return render(request,"admin/notices-view.html")

def notices_delete(request):
    
    return redirect("/admin/notice")


def notices_edit(request):
    if (request.method == "put"):
        # delete content
        pass
    return render(request,"admin/notices-edit.html")


def notices_create(request):
    if (request.method == "post"):
        # create new content
        pass
    return render(request,"admin/notices-create.html")


def queries(request):
    if (request.method == "delete"):
        # delete content
        pass
    return render(request,"admin/queries.html")


def queries_create(request):
    if (request.method == "post"):
        # delete content
        pass
    return render(request,"admin/queries-create.html")


def queries_edit(request):
    if (request.method == "put"):
        # delete content
        pass
    return render(request,"admin/queries-edit.html")


def queries_delete(request,id):
    return redirect("/admin/queries")


def queries_view(request):
    
    return render(request,"admin/queries-view.html")

def queries_reply(request,id):
    
    return redirect("/admin/queries")


def settings(request):

    return render(request,"admin/settings.html")

def update_settings(request):
    return redirect("/admin/settings")