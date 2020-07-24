from django.http import HttpResponse
from django.shortcuts import redirect

def main_redirect(request):
    return redirect('stories_list', permanent=True)
