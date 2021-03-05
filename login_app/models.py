from django.db import models

import bcrypt
import re

class UserManager(models.Manager):
    def required_fields(self, postData, fields):
        errors = {}
        for field in fields:
            if len(postData.get(field)) == 0:
                errors[field] = f"{field.replace('_',' ').title()} field is required."
        return errors

    def user_exists(self, email_string):
        user_objs = self.filter(email=email_string);
        return len(user_objs) > 0

    def username_exists(self, username_string):
        user_objs = self.filter(username=username_string);
        return len(user_objs) > 0

    def check_password(self, email_string, password_string):
        user = self.filter(email=email_string);
        if len(user) == 0:
            return False;            
        if len(user) > 1:
            raise Exception("error: UserManager.check_password: more than one user matches supplied email.")
        return bcrypt.checkpw(password_string.encode(), user[0].password.encode())

    def validate_email(self, email_string):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        return EMAIL_REGEX.match(email_string)

    def login_validator(self, postData):
        # ensure that all required fields are supplied
        errors = self.required_fields(postData, ["email", "password"])
        if len(errors) > 0: return errors
        # EMAIL VALIDATION
        email = postData.get("email")
        # ensure that email is valid 
        if not self.validate_email(email):
            errors["email"] = "Enter a valid email."
        elif len(email) > 255: 
            errors["email"] = "Email too long."
        # return email errors first
        if len(errors) > 0:
            return errors
        # ensure that email is in DB 
        if not self.user_exists(email):
            errors["auth"] = "Email or password is incorrect"
        # ensure that password matches email 
        if not self.check_password(email, postData.get("password")): 
            errors["auth"] = "Email or password is incorrect"
        return errors

    def getCharTypes(self, string):
        output = {
            "digit": 0,
            "special": 0,
            "alpha": 0,
        }
        for char in string:
            if char.isalpha():
                output["alpha"] += 1
            elif char.isdigit():
                output["digit"] += 1
            else:
                output["special"] += 1
        return output

    def registration_validator(self, postData):
        # ensure all required fields are supplied
        errors = self.required_fields(postData, ["email", "username", "password", "verify_password"])
        if len(errors) > 0: return errors
        # EMAIL VALIDATION
        email = postData.get("email").lower()
        # ensure email is valid 
        if not self.validate_email(email):
            errors["email"] = "Enter a valid email."
        elif len(email) > 255: 
            errors["email"] = "Email too long."
        elif self.user_exists(email):
            errors["email"] = "Email already taken."
        # USERNAME VALIDATION
        username = postData.get("username").lower()
        # ensure username contains 3 or more characters 
        if len(username) < 3:
            errors["username"] = "Username too short."
        elif len(username) > 255:
            errors["username"] = "Username too long."
        elif self.username_exists(username):
            errors["username"] = "Username already taken."
        # PASSWORD VALIDATION
        password = postData.get("password")
        password_chars = self.getCharTypes(password)
        # ensure passwords contains 8 or more characters
        if len(password) < 8:
            errors["password"] = "Password must be at least 8 characters long."
        # ensure password contains at least 1 lowercase letter,
        # uppercase letter, digit, and special character.
        elif (
            password_chars["alpha"] == 0 or
            password_chars["digit"] == 0 or 
            password_chars["special"] == 0
        ):
            errors["passwords"] = "Passwords must have at least one letter, digit, and special character."
        # ensure passwords match
        elif password != postData.get("verify_password"):
            errors["password"] = "Passwords do not match"
        return errors

class User(models.Model):
    email = models.CharField(max_length=255);
    username = models.CharField(max_length=255);
    password = models.CharField(max_length=60);

    DURATIONS = [
        (30, "30"),
        (60, "60"),
        (120, "120"),
    ]
    DEFAULT_DURATION = 30
    duration = models.PositiveSmallIntegerField(default=DEFAULT_DURATION, choices=DURATIONS)

    EASY = 1
    MEDIUM = 2
    HARD = 3
    DIFFICULTIES = [
        (EASY, "Easy"),
        (MEDIUM, "Medium"),
        (HARD, "Hard"),
    ]
    DEFAULT_DIFFICULTY = EASY
    difficulty = models.PositiveSmallIntegerField(default=DEFAULT_DIFFICULTY, choices=DIFFICULTIES)

    _80 = "80"
    _80_WKL = "80-wkl"
    _75 = "75"
    _75_WKL = "75-wkl"
    _65 = "65"
    _65_WKL = "65-wkl"
    _60 = "60"
    _60_WKL = "60-wkl"
    _60_HHKB = "60-hhkb"
    LAYOUTS = [
        (_80, "TKL"),
        (_80_WKL, "80% WKL"),
        (_75, "75%"),
        (_75_WKL, "75% WKL"),
        (_65, "65%"),
        (_65_WKL, "65% WKL"),
        (_60, "60%"),
        (_60_WKL, "60% WKL"),
        (_60_HHKB, "HHKB"),
    ]
    DEFAULT_LAYOUT  = _80
    layout = models.CharField(max_length=10, default=DEFAULT_LAYOUT, choices=LAYOUTS)

    DARK = 1
    LIGHT = 2
    MODES = [
        (DARK, "Dark"),
        (LIGHT, "Light"),
    ]
    DEFAULT_MODE = DARK
    mode = models.PositiveSmallIntegerField(default=DEFAULT_MODE, choices=MODES)

    WORDS = 1
    TEST_TYPES = [
        (WORDS, "Words"),
    ]
    DEFAULT_TEST_TYPE = WORDS
    test_type = models.PositiveSmallIntegerField(default=DEFAULT_TEST_TYPE, choices=TEST_TYPES)
    
    objects = UserManager()