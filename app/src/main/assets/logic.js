var teamNumber;
var matchNumber;
var position;
var Event;
var Color;
var keyNum = [];

var SHatch;
var SBall;
var STop;
var SBottom;
var SMid;
var SShip

var THatch;
var TBall;
var TTop;
var TBottom;
var TMid;
var TShip;
var Climb;

var Winner;
var RScore;
var BScore;
var notes;

    function getResults(){
        teamNumber = document.getElementById("teamNum").value;
    matchNumber = document.getElementById("matchNum").value;

    if(document.getElementsByName("position")[0].checked == true){
        position = document.getElementsByName("position")[0].value;
     }else if(document.getElementsByName("position")[1].checked == true){
         position = document.getElementsByName("position")[1].value;
     } else{
        position = document.getElementsByName("position")[2].value;
     }

     if(document.getElementsByName("Location")[0].checked == true){
        Event = document.getElementsByName("Location")[0].value;
     }else{
         Event = document.getElementsByName("Location")[1].value;
     }

     if(document.getElementsByName("Colour")[0].checked == true){
        Color = document.getElementsByName("Colour")[0].value;
     }else{
         Color = document.getElementsByName("Location")[1].value;
     }

        SHatch= document.getElementById("Shatch").value;
        SBall= document.getElementById("Sball").value;

        if(document.getElementById("Stop").checked == true){
        STop= document.getElementById("Stop").value;
        }else{
            STop="Not Reached";
        }
        if(document.getElementById("Smiddle").checked == true){
        SMid= document.getElementById("Smiddle").value;
            }else{
                SMid="Not Reached";
            }
            if(document.getElementById("Sbottom").checked == true){
        SBottom= document.getElementById("Sbottom").value;
                }else{
                    SBottom="Not Reached";
                }
                if(document.getElementById("Sship").checked == true){
                    SShip = document.getElementById("Sship").value;
                    }else{
                        SShip="Not Reached";
                    }


        Hatch= document.getElementById("hatch").value;
        Ball= document.getElementById("ball").value;

        TTop= document.getElementById("top").value;
        TMid= document.getElementById("middle").value;
        TBottom= document.getElementById("bottom").value;
        TShip = document.getElementById("ship").value;

        if(document.getElementById("top").checked == true){
            TTop= document.getElementById("top").value;
            }else{
                TTop="Not Reached";
            }
            if(document.getElementById("middle").checked == true){
            TMid= document.getElementById("middle").value;
                }else{
                    TMid="Not Reached";
                }
                if(document.getElementById("bottom").checked == true){
            TBottom= document.getElementById("bottom").value;
                    }else{
                        TBottom="Not Reached";
                    }
                    if(document.getElementById("ship").checked == true){
                        TShip = document.getElementById("ship").value;
                        }else{
                            TShip="Not Reached";
                        }

        if(document.getElementsByName("Y/n")[0].checked == true){
            Climb = document.getElementsByName("Y/n")[0].value;
         }else{
             Climb = document.getElementsByName("Y/n")[1].value;
         }
         if(document.getElementsByName("Win")[0].checked == true){
            Winner = document.getElementsByName("Win")[0].value;
         }else if(document.getElementsByName("Win")[1].checked == true){
             Winner = document.getElementsByName("Win")[1].value;
         } else{
             Winner = null;
         }
         RScore=document.getElementById("RScore").value;
         BScore=document.getElementById("BScore").value;
         notes = document.getElementById("notes").value;


         localStorage.setItem("Team Number"+(localStorage.length/20), teamNumber);
         localStorage.setItem("Match Number"+((localStorage.length-1)/20), matchNumber);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Location", Event);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Position", position);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-color", Color);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Shatch", SHatch);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Sball", SBall);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Stop", STop);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Smiddle", SMid);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-SBottom", SBottom);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-hatch", THatch);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-ball", TBall);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-TTop", TTop);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Tmiddle", TMid);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-TBottom", TBottom);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Climb",Climb);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Win", Winner);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-BScore", BScore);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-RScore", RScore);





        }

function getInfo(Num){
    sessionStorage.setItem("clicked", Num.id);
}

function load(){

   for(i=0; i<(localStorage.length/20); i++){
   keyNum.push((localStorage.length/20)-(i+1));
console.log[i];
   var nbutton = document.createElement("button");
   nbutton.setAttribute("id",localStorage.getItem("Team Number"+keyNum[i])+"-"+localStorage.getItem("Match Number"+keyNum[i]));
   nbutton.setAttribute("onclick","getInfo(this)");
   var a = document.createElement("a");
   a.setAttribute("href","info.html");
   a.innerText= " Team: "+localStorage.getItem("Team Number"+keyNum[i]) +" Match: "+localStorage.getItem("Match Number"+keyNum[i]);
  document.body.appendChild(nbutton);
  nbutton.appendChild(a);
   }
}
   function loadInfo(){
       var test = document.createElement("p");
       test.innerText =  sessionStorage.getItem("clicked");
       document.body.appendChild(test);
   }

