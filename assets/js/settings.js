let settingsMenuShown = true;

function onStart()
{
    modifySettings();
}

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


function modifySettings()
{
    if(settingsMenuShown == false) return;

    document.body.style.backgroundColor = document.getElementById("bg-color-picker").value;
    document.getElementById("clock").style.color = document.getElementById("hands-color-picker").value;

    setTimeout(modifySettings, 1);
}