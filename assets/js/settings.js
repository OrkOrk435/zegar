let settingsMenuShown = true;

document.onkeydown = function (e) {
    if(e.key = "x") showSettings()
  };
function showSettings()
{
    if(settingsMenuShown)
    {
        document.getElementById("settings-window").style.display="none";
        settingsMenuShown = false;
    }

    else
    {
        document.getElementById("settings-window").style.display="block";
        settingsMenuShown = true;
    }
}
