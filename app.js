var uiArray = [
    {
        url: "nV1.html",
        id: "0"
    },

    {
        url: "gT3.html",
        id: "1"
    }

];

var submitButton = document.getElementById('submit');

var x = setURL();

function setURL() {
    var myrandom = Math.floor(Math.random() * 2) + 1;
    sessionStorage.setItem("state", (myrandom));
    sessionStorage.setItem("tick", "0");
    var urli = uiArray[myrandom-1].url;

    return urli;
}

function sStorage(button, url){

    if(sessionStorage.getItem("state")==="3"){
        window.location = "complete.html";
    }


    function goToSurvey(url) {
        window.location = url;
    }


    button.onclick = function () {
        goToSurvey(url);
    }

}

sStorage(submitButton, x);