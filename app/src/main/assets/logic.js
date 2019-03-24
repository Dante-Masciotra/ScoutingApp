var teamNumber;
var matchNumber;
var position;
var keyNum = [];
var test;
function ComStart(){
    teamNumber = document.getElementById("teamNum").value;
    matchNumber = document.getElementById("matchNum").value;

    localStorage.setItem("Team Number"+(localStorage.length/2), teamNumber)
    localStorage.setItem("Match Number"+((localStorage.length-1)/2), matchNumber)

}

function getInfo(Num){
    localStorage.setItem("clicked", Num.id);
}

function load(){

   for(i=0; i<(localStorage.length/2); i++){
   keyNum.push((localStorage.length/2)-(i+1));
console.log[i]
   var nbutton = document.createElement("button")
   nbutton.setAttribute("id","Team Number"+keyNum[i]);
   nbutton.setAttribute("onclick","getInfo(this)")
   var a = document.createElement("a")
   a.setAttribute("href","info.html");
   a.innerText= " Team: "+localStorage.getItem("Team Number"+keyNum[i]) +" Match: "+localStorage.getItem("Match Number"+keyNum[i]);
  document.body.appendChild(nbutton)
  nbutton.appendChild(a)
   }
   function loadInfo(){
       var test
   }

}