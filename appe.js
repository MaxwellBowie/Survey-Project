// function ui(url, id) {
//     this.url = url;
//     this.id = id;
// }
//
// function surveySessionId(sid) {
//     this.sid = sid;
// }
//
// function question(q, qno) {
//     this.q = q;
//     this.qno = qno;
// }
//
// var q1 = new question("why is red blue?", "q1");
// var q2 = new question("where are the keys?", "q2");
//
// var ui1 = new ui("https://xd.adobe.com/embed/58912c2e-772f-4da1-72a9-1180be21bae5-2ea0/", 1);
// var ui2 = new ui("https://xd.adobe.com/embed/27547a65-a550-41f8-7fc0-1f083c41eee5-5165/", 2);
//
// var uiArray = [];
//
// var qArray = [];
//
// uiArray.push(ui1, ui2);
//
// qArray.push(q1, q2);
//
// // var count=0;
//
// var tick;
//
//
// function randomIframe() {
//
//     var i = Math.round(Math.random() * uiArray.length);
//
//     var iframe = document.createElement('iframe');
//
//     var div = document.getElementById('myDiv');
//
//     tick = uiArray[i].id;
//
//     sessionStorage.setItem('tick', JSON.stringify(tick));
//
//     iframe.src = uiArray[i].url;
//     iframe.style.height = '640px';
//     iframe.style.width = '360px';
//     iframe.allowFullscreen;
//     iframe.style.border = 'none';
//     div.appendChild(iframe);

// }

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

var x = "instructions.html";


function sStorage(button, url){

    if(sessionStorage.getItem("state")==="3"){
        window.location = "complete.html";
    }

    function sStorages(button) {


        //Initialise age,gender and experience vars
        var age = document.getElementById('age').value;

        var gender;

        var exp;

        var curr;

        if (document.getElementById('m').checked) {
            gender = document.getElementById('m').value;
        }

        if (document.getElementById('f').checked) {
            gender = document.getElementById('f').value;
        }

        if (document.getElementById('p').checked) {
            gender = document.getElementById('p').value;
        }

        if (document.getElementById('y').checked) {
            exp = document.getElementById('y').value;
        }

        if (document.getElementById('n').checked) {
            exp = document.getElementById('n').value;
        }

        if (document.getElementById('s').checked) {
            exp = document.getElementById('s').value;
        }


        if (document.getElementById('yy').checked) {
            curr = document.getElementById('yy').value;
        }

        if (document.getElementById('nn').checked) {
            curr = document.getElementById('nn').value;
        }


        if (typeof(Storage) !== 'undefined') {
            sessionStorage.setItem('age', age);
            sessionStorage.setItem('gender', gender);
            sessionStorage.setItem('exp', exp);
            sessionStorage.setItem('currentUse', curr);
        }

    }



    function goToSurvey(url) {
        window.location = url;
    }


    button.onclick = function () {
        sStorages();
        goToSurvey(url);
    }

}

sStorage(submitButton, x);

//
// Count ticker tracks which user interface the survey should correlate too
// function setCount(){
//
//     var val = document.getElementById("submit_UI").value;
//
//     if(val === "survey_UI_1")
//     {
//         count = 1;
//         sessionStorage.setItem('count', count);
//
//     }
//
//     else if(val === "survey_UI_2")
//
//     {
//         count = 2;
//         sessionStorage.setItem('count', count);
//     }
//
//     document.getElementById("status").innerHTML = count;
//
// }

//
// function storeSurvey(){
//     createArray();
// }
//
// // Create array for storing survey data
// function createArray() {
//
//     var v = "";
//
//     var uiID = sessionStorage.getItem("tick");
//
//     var myArr = new Object();
//
//     for(var c=0; c <= qArray.length; c++) {
//
//         var check = qArray[c].qno;
//         myArr[c] = createSubArray(check);
//
//         for(var i=0; i <= uiArray.length; i++){
//             if(i=uiID){
//                 if(typeof(Storage) !== 'undefined') {
//                     v = uiID;
//                     var ssID = "survey_UI_" + v;
//                     sessionStorage.setItem(ssID, JSON.stringify(myArr));
//                 }
//             }
//         }
//     }
//
//
//
//         if(typeof(Storage) !== 'undefined'){
//
//             if(ui==1) {
//                 sessionStorage.setItem('survey_UI_1', JSON.stringify(myArr));
//             }
//
//             else if(ui==2) {
//                 sessionStorage.setItem('survey_UI_2', JSON.stringify(myArr));
//             }
//         }
//
//     document.getElementById("status").innerHTML = check;
//
//     var submit = document.getElementById('myForm');
//     submit.addEventListener('submit', createArray);
//
//     return myArr;
//
// }
//
//
// function createSubArray(name){
//     var arr = new Object();
//     elems = document.getElementsByName(name);
//     for (var i=0;i<elems.length;i++){
//         if (elems[i].checked){
//             arr[name] =  elems[i].value;
//         }
//     }
//     return arr;
//
// }

