from django.shortcuts import render, redirect

layouts = { 
    "80": "TKL",
    "80-wkl": "WKL",
    "75": "75%",
    "75-wkl": "75% WKL",
    "65": "65%",
    "65-wkl": "65% WKL",
    "60": "60%",
    "60-wkl": "60% WKL",
    "60-hhkb": "HHKB",
}
modes = {
    "light": "Light", 
    "dark": "Dark",
}

sample_text = 4*["lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit","repellat","nemo","blanditiis","ipsa","reiciendis","molestias","totam","pariatur","minus","cumque","maiores","eveniet","voluptas","recusandae","dignissimos","sequi","atque","voluptatum","ad","ipsam","consequuntur","officiis"]

# Create your views here.
def index(request):
    if "current_layout" not in request.session:
        assert "60-hhkb" in layouts, "default layout is not in `layouts` dictionary"
        request.session["current_layout"] = ("60-hhkb", layouts.get("60-hhkb"))
    if "current_mode" not in request.session:
        assert "dark" in modes, "default mode is not in `modes` dictionary"
        request.session["current_mode"] = ("dark", modes.get("dark"))

    context = {
        "layouts": sorted(list(layouts.items()), key=lambda x : x[1]),
        "current_layout": request.session.get("current_layout"),
        "modes": sorted(list(modes.items()), key=lambda x : x[0]),
        "current_mode": request.session.get("current_mode"),
        "word_list": sample_text,
    }
    return render(request, "index.html", context)

def change_layout(request):
    new_layout = request.POST.get("layout")
    assert new_layout in layouts, f"new layout '{new_layout}' is not in `layouts` dictionary"
    request.session["current_layout"] = (new_layout, layouts.get(new_layout))
    return redirect("/")

def change_mode(request):
    new_mode = request.POST.get("mode")
    assert new_mode in modes, f"new mode '{new_mode}' is not in `modes` dictionary"
    request.session["current_mode"] = (new_mode, modes.get(new_mode)) 
    return redirect("/")
