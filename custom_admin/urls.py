from django.urls import path
from .views import *


urlpatterns = [
    # Login
    path("login",Login),
    # dashboard
    path('dashboard',Dashboard),
    # blogs
    path('blogs',blogs),
    path('blogs/edit/<int:id>',blogs_edit),
    path('blogs/create',blogs_create),
    path('blogs/view/<int:id>',blogs_view),
    path('blogs/delete/<int:id>',blogs_delete),
    # admissions
    path('admissions',admissions),
    path('admissions/create',create_admission),
    path('admissions/edit/<int:id>',edit_admission),
    path('admissions/view/<int:id>',view_admission),
    path('admissions/delete/<int:id>',delete_admission),
    # Gallery
    path('gallery',gallery),
    path('gallery',gallery_create),
    path('gallery/edit/<int:id>',gallery_edit),
    path('gallery/view/<int:id>',gallery_view),
    path('gallery/delete/<int:id>',gallery_delete),
    # Notices
    path('notices',notices),
    path('notices',notices_create),
    path('notices/edit/<int:id>',gallery_edit),
    path('notices/view/<int:id>',gallery_view),
    path('notices/delete/<int:id>',gallery_delete),
    # queries
    path('queries',queries),
    path('queries',queries_create),
    path('queries/reply/<int:id>',queries_reply),
    path('queries/view/<int:id>',queries_view),
    path('queries/delete/<int:id>',queries_delete),
    # settings
     path('settings',settings),
     path("update_settings",update_settings),
]