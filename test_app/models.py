from django.db import models
from login_app.models import User

class Test(models.Model):
    score = models.DecimalField(max_digits=7, decimal_places=3)
    difficulty = models.PositiveSmallIntegerField(choices=User.DIFFICULTIES)
    duration = models.PositiveSmallIntegerField(choices=User.DURATIONS)
    test_type = models.PositiveSmallIntegerField(choices=User.TEST_TYPES)
    user_id = models.ForeignKey(User, related_name="tests", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
