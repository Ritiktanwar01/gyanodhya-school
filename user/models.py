from django.db import models



class Gallery_Item (models.Model):
    id = models.IntegerField(primary_key=True,auto_created=True,editable=False)
    Title = models.CharField(max_length=80,default="")
    # descreption = models.CharField(max_length=80)
    # image = models.ImageField(upload_to="media/Gallery")
    video_link = models.TextField()

    def __str__ (self):
        return self.Title
    
    
class Blog_Item(models.Model):
    id = models.IntegerField(primary_key=True,auto_created=True,editable=False)
    Title = models.CharField(max_length=80)
    image = models.ImageField(upload_to="media/Blog")
    descreption = models.TextField()
    Author_name = models.CharField(max_length=80)
    catigory = models.CharField(max_length=80,default="Education")
    headline = models.CharField(max_length=80,default="Our Annual Sports Day was a spectacular event showcasing the athletic talents of our students across various competitions and games.")
    date_time = models.DateField()
    
    def __str__ (self):
        return self.Title
    
    
class Notice_Items(models.Model):
    id = models.IntegerField(primary_key=True,auto_created=True,editable=False)
    Title = models.CharField(max_length=80)
    descreption = models.CharField(max_length=80)
    Author_name = models.CharField(max_length=80)
    date_time = models.DateField()
    
    def __str__ (self):
        return self.Title
    
    
class Official_detail(models.Model):
    Header = models.CharField(max_length=80,default="")
    street = models.CharField(max_length=120,default="")
    city = models.CharField(max_length=120,default="")
    state = models.CharField(max_length=120,default="")
    pincode = models.CharField(max_length=8,default="")
    country = models.CharField(max_length=120,default="")
    mobile_primary = models.CharField(max_length=14,default="")
    mobile_secondary = models.CharField(max_length=14,default="")
    email_primary = models.EmailField(default="")
    email_secondary = models.EmailField(default="")
    mail_message = models.TextField(default="")
    map_link = models.TextField(default="")
    whats_app_mobile = models.CharField(max_length=14,default="")
    whatsapp_message = models.TextField(default="")
    logo = models.ImageField(upload_to="media/logo",default="")
    session_year = models.CharField(max_length=80,default="2025-2026")
    instagram = models.TextField(default="")
    youtube = models.TextField(default="")
    facebook = models.TextField(default="")
    footer_quote = models.CharField(max_length=120,default="Empowering future leaders through quality education with love and care")
    school_name = models.CharField(max_length=120,default="Gyanodaya Public School")
    
    
    def __str__ (self):
        return "Official details"
    
    
class About_page(models.Model):
    our_story_1 =  models.TextField(blank=True)
    our_story_2 =  models.TextField(blank=True)
    our_mission =  models.TextField(blank=True)
    our_vision =  models.TextField(blank=True)
    about_image = models.ImageField(upload_to="aboutImage",default="default.png")
    
    def __str__(self):
        return "About"
    
    
class values_section(models.Model):
    title = models.CharField(max_length=60)
    message = models.TextField()

    def __str__(self):
        return self.title
    
    
class admission_proces(models.Model):
    text = models.CharField(max_length=80)

    def __str__(self):
        return self.text
    
class required_document(models.Model):
    text = models.CharField(max_length=80)

    def __str__(self):
        return self.text
    
class important_date(models.Model):
    tittle = models.CharField(max_length=40,default="")
    text = models.CharField(max_length=80)

    def __str__(self):
        return self.text
    
    
    
class Pride_Of_students (models.Model):
    name = models.CharField(max_length=80)
    Designation = models.CharField(max_length=80)
    
    def __str__(self):
        return self.name
    
    
    
class Contact_querries(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=10)
    email = models.EmailField()
    subject = models.TextField()
    message = models.TextField()
    
    def __str__(self):
        return self.name
    
    
class Addmission_form(models.Model):
    student_first_name = models.CharField(max_length=20,default="")
    student_last_name = models.CharField(max_length=20,default="")
    student_last_gender = models.CharField(max_length=20,default="")
    student_date_of_birth = models.CharField(max_length=20,default="")
    grade_applying_for = models.CharField(max_length=20,default="")
    previous_school = models.CharField(max_length=120,default="")
    
    # guardian info
    
    Guardian_name = models.CharField(max_length=20,default="")
    Guardian_relation = models.CharField(max_length=60,default="")
    Guardian_email = models.EmailField(default="")
    Guardian_mobile = models.CharField(max_length=10,default="")
    
    # address
    address = models.CharField(max_length=10,default="")

    comments = models.TextField(null=True,blank=True,default="")
    
    seen = models.BooleanField(default=False)

    def __str__(self):
        string = str(self.student_first_name + ' ' + self.student_last_name)
        return string
    
    
class Home_page_stats(models.Model):
    years_of_excellence = models.CharField(max_length=5)
    Happy_Students = models.CharField(max_length=5)
    Success_Rate = models.CharField(max_length=5)
    Expert_Teachers = models.CharField(max_length=5)
    Hero_video = models.FileField(default="default.mp4",upload_to="Hero_video_Home")
    About_Image = models.ImageField(default="default.png")
    About_Text = models.TextField(default="")


    def __str__(self):
        return "Home page stats"
    
    
class Home_Why_Choose_Us(models.Model):
    id = models.IntegerField(auto_created=True,primary_key=True)
    title = models.CharField(max_length=80)
    text = models.TextField()

    def __str__(self):
        return self.title
    
class Carousel_Items_students(models.Model):
    Image = models.ImageField(upload_to="media/carousel/")
    Title = models.CharField(max_length=50)

    def __str__(self):
        return self.Title
    
    
class Office_Hours(models.Model):
    day = models.CharField(max_length=80)
    timing = models.CharField(max_length=120)

    
    def __str__(self):
        return self.day



