from django.contrib import admin
from django.urls import path,include,re_path



urlpatterns = [
    # path('jet/', include('jet.urls', 'jet')),
    # path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    path('super_admin/', admin.site.urls),
    path("",include("user.urls")),
    path("admin/",include("custom_admin.urls")),
]
