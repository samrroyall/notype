from django.http import JsonResponse
from django.shortcuts import render, redirect
from login_app.models import User
from test_app.models import Test
from .wordlists import get_new_test

def get_user(sessionData):
    if "userid" not in sessionData:
        return None
    user_objs = User.objects.filter(email=sessionData.get("userid"))
    if len(user_objs) != 1:
        raise Exception("error: test_app.views.get_user: more than one user matches supplied email.")
    return user_objs[0]

def rank(results):
    scored_results = []
    prevScore = None
    prevRank = None
    currRank = 0 
    for result in results:
        currRank += 1
        if prevScore is not None and result.score == prevScore:
            scored_results.append( [prevRank, result] )
            continue
        scored_results.append( [currRank, result] )
        prevRank = currRank
        prevScore = result.score
    return scored_results

# ROUTES

def index(request):
    return redirect("/test");

def test(request):
    # set default keyboard layout and color mode
    current_user = get_user(request.session)
    context = {
        "auth_type": request.session.get("auth_type") if "auth_type" in request.session else None,
        "preferences": {
            "layouts": User.LAYOUTS,
            "default_layout": User.DEFAULT_LAYOUT,
            "modes": User.MODES,
            "default_mode": User.DEFAULT_MODE,
            "difficulties": User.DIFFICULTIES,
            "durations": User.DURATIONS,
            "default_duration": User.DEFAULT_DURATION,
            "test_types": User.TEST_TYPES,
        },
        "leaderboard_results": rank(Test.objects.all().order_by("-score")),
        "user": current_user,
        "word_list": (
            get_new_test( int(current_user.duration/60*500), current_user.difficulty )
            if current_user is not None 
            else get_new_test( int(User.DEFAULT_DURATION/60*500), User.DEFAULT_DIFFICULTY )
        ),
    }
    return render(request, "index.html", context)

def change_user_settings(request):
    current_user = get_user(request.session)
    if not current_user or request.method != "POST" or not request.is_ajax():
        return redirect("/")
    name = request.POST.get("name")
    value = request.POST.get("value")
    print(f"name: {name}, value: {value}")
    success = False
    if name == "duration":
        if int(value) in [choice[0] for choice in User.DURATIONS]:
            current_user.duration = int(value)
            success = True
    elif name == "difficulty":
        if int(value) in [choice[0] for choice in User.DIFFICULTIES]:
            current_user.difficulty = int(value)
            success = True
    elif name == "layout":
        if value in [choice[0] for choice in User.LAYOUTS]:
            current_user.layout = value
            success = True
    elif name == "mode":
        if int(value) in [choice[0] for choice in User.MODES]:
            current_user.mode = int(value)
            success = True
    elif name == "test_type":
        if int(value) in [choice[0] for choice in User.TEST_TYPES]:
            current_user.test_type = int(value)
            success = True
    if not success:
        return JsonResponse({"message": "Invalid form name or value"}, status=400)
    current_user.save()
    return JsonResponse({}, status=200)

def upload_test_results(request):
    current_user = get_user(request.session)
    if request.method != "POST" or not request.is_ajax():
        return redirect("/")
    if not current_user:
        return JsonResponse({
            "message": f"Test not recorded because user is not authenticated."
        }, status=200) 
    new_test_result = Test.objects.create(
        score = float(request.POST.get("score")),
        difficulty = current_user.difficulty,
        duration = current_user.duration,
        test_type = current_user.test_type,
        user_id = current_user
    )
    current_user.save()
    return JsonResponse({"message": "Test data recorded."}, status=200)