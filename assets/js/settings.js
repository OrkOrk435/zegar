let settingsMenuShown = true;
function showSetings()
{
    if(settingsMenuShown)
    document.getElementById("settings-window").style.display="none";
    else
    document.getElementById("settings-window").style.display="block";
}

document.onkeydown = function (e) {
    if(e.key = "x") showSettings();
  };