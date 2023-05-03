let settingsMenuShown = true;
let currentTime = new Date();
let seconds, minutes, hours;


function onStart()
{
    modifySettings();
    timeSet();
}

document.onkeydown = function (e) {
    //console.log(e.code);
    if(e.key == "x") showSettings();
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


$(document).ready(function(){

    $('input.img-file').on('change', addFile);
   
});

    function addFile (event) {

       var jqDisplay = $('div.clock-logo');
       var reader = new FileReader();
       var selectedFile = event.target.files[0];

       reader.onload = function (event) {
           var imageSrc = event.target.result;
           jqDisplay.html('<img src="' + imageSrc + '" alt="uploaded Image" width="'+document.getElementById("img-width").value+'" height="'+document.getElementById("img-height").value+'" style = "position: absolute;">');
       };
      reader.readAsDataURL(selectedFile); 
   }

function timeSet()
{
    currentTime = new Date();

    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;
    
    document.getElementById("clock-temp").innerHTML = "<h1>"+hours+":"+minutes+":"+seconds+"</h1>"
    setTimeout(timeSet, 1000);
}