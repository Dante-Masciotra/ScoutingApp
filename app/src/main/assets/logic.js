var teamNumber;
var matchNumber;
var position;
var timesclicked1= 0;
function ComStart(){
    timesclicked1= timesclicked1 + 1
    teamNumber = document.getElementById("teamNum").value;
    matchNumber = document.getElementById("matchNum").value;
    console.log(teamNumber)
    window.localStorage.setItem("Team Number"+timesclicked1, teamNumber)
    window.localStorage.setItem("Match Number"+timesclicked1, matchNumber)
}

function Open(){
   var new1 = document.createElement("div")
   new1.setAttribute("id","new");
   new1.innerText= localStorage.getItem("Team Number1");
  document.body.appendChild(new1)
}