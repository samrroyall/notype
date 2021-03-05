from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import User

import bcrypt

def login(request):
    # error handling
    if request.method != "POST" or not request.is_ajax():
        return redirect("/")
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0: 
        return JsonResponse({"errors": list(errors.values())}, status=200)

    # no errors
    # add email to session
    request.session["userid"] = request.POST.get("email").lower()
    return JsonResponse({}, status=200)

def register(request):
    # error handling
    if request.method != "POST" or not request.is_ajax():
        return redirect("/")
    errors = User.objects.registration_validator(request.POST)
    if len(errors) > 0: 
        return JsonResponse({"errors": list(errors.values())}, status=200)

    # no errors
    new_user = User.objects.create(
        email=request.POST.get("email").lower(),
        username=request.POST.get("username").lower(),
        password=bcrypt.hashpw(
            request.POST.get("password").encode(),
            bcrypt.gensalt()
        ).decode(),
    )
    # add email to session
    request.session["userid"] = new_user.email 
    return JsonResponse({}, status=200)

def logout(request):
    if "userid" in request.session:
        del request.session["userid"]
    return redirect("/")
