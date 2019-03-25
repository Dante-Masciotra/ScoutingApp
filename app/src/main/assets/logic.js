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
         Color = document.getElementsByName("Colour")[1].value;
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


        THatch= document.getElementById("hatch").value;
        TBall= document.getElementById("ball").value;

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
             //d@nte was here
            Winner = document.getElementsByName("Win")[0].value;
         }else if(document.getElementsByName("Win")[1].checked == true){
             Winner = document.getElementsByName("Win")[1].value;
         } else{
             Winner = null;
         }
         RScore=document.getElementById("RScore").value;
         BScore=document.getElementById("BScore").value;

         notes = document.getElementById("notes").value;


         localStorage.setItem("Team Number"+(localStorage.length/22), teamNumber);
         localStorage.setItem("Match Number"+((localStorage.length-1)/22), matchNumber);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Location", Event);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Position", position);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-color", Color);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Shatch", SHatch);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Sball", SBall);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Stop", STop);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Smiddle", SMid);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-SBottom", SBottom);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Sship", SShip);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Hatch", THatch);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Ball", TBall);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-TTop", TTop);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Tmiddle", TMid);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-TBottom", TBottom);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Tship", TShip);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Climb",Climb);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Win", Winner);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-BScore", BScore);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-RScore", RScore);
         localStorage.setItem(teamNumber+"-"+matchNumber+"-Notes", notes);






        }

function getInfo(Num){
    sessionStorage.setItem("clicked", Num.id);
}

function load(){

   for(i=0; i<(localStorage.length/22); i++){
   keyNum.push((localStorage.length/22)-(i+1));
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
     var click = sessionStorage.getItem("clicked");

      var match= document.createElement("p");
      var team= document.createElement("p");
      var loc = document.createElement("p");
      var color= document.createElement("p");
      var pos= document.createElement("p");
      var sHatch= document.createElement("p");
      var sBall= document.createElement("p");
      var sTop= document.createElement("p");
      var sBottom= document.createElement("p");
      var Smid= document.createElement("p");
      var sShip= document.createElement("p");
      var tHatch= document.createElement("p");
      var tBall= document.createElement("p");
      var tTop= document.createElement("p");
      var tBottom= document.createElement("p");
      var tMid= document.createElement("p");
      var tShip= document.createElement("p");
      var climb= document.createElement("p");
      var winner= document.createElement("p");
      var rScore= document.createElement("p");
      var bScore= document.createElement("p");
      var notes= document.createElement("p");

    loc.innerText = "Location: "+localStorage.getItem(click+"-Location")
    color.innerText = "Team Color: "+localStorage.getItem(click+"-color")
    pos.innerText = "Start Position: "+localStorage.getItem(click+"-Position")
    sHatch.innerText = "Hatches Placed In Sandstorm: "+localStorage.getItem(click+"-Shatch")
    sBall.innerText = "Cargo Placed In Sandstorm: "+localStorage.getItem(click+"-Sball")
    sTop.innerText = "Was Cargo Place In The Top During SandStorm? "+localStorage.getItem(click+"-Stop")
    sBottom.innerText = "Was Cargo Place In The Bottom During SandStorm? "+localStorage.getItem(click+"-SBottom")
    Smid.innerText = "Was Cargo Place In The Middle During SandStorm? "+localStorage.getItem(click+"-Smiddle")
    sShip.innerText = "Was Cargo Place In The Cargoship During SandStorm? "+localStorage.getItem(click+"-Sship")
    tHatch.innerText = "Hatches Placed: "+localStorage.getItem(click+"-Hatch")
    tBall.innerText = "Cargo Placed: "+localStorage.getItem(click+"-Ball")
    tTop.innerText = "Was Cargo Place In The Top? "+localStorage.getItem(click+"-TTop")
    tBottom.innerText = "Was Cargo Place In The Bottom? "+localStorage.getItem(click+"-TBottom")
    tMid.innerText = "Was Cargo Place In The Middle? "+localStorage.getItem(click+"-Tmiddle")
    tShip.innerText = "Was Cargo Place In The Cargoship? "+localStorage.getItem(click+"-Tship")
    climb.innerText = "Did They Climb? "+localStorage.getItem(click+"-Climb")
    winner.innerText = "Who Won? "+localStorage.getItem(click+"-Win")
    rScore.innerText = "Red Score: "+localStorage.getItem(click+"-RScore")
    bScore.innerText = "Blue Score: "+localStorage.getItem(click+"-BScore")
    notes.innerText = "Notes: "+localStorage.getItem(click+"-Notes")

       for(i=0; i<(localStorage.length/22); i++){
        keyNum.push((localStorage.length/22)-(i+1));
       team.innerText = "Team Number: "+ localStorage.getItem("Team Number"+keyNum[i])
       match.innerText = "Match Number: "+ localStorage.getItem("Team Number"+keyNum[i])
       }

       document.getElementById("Match").appendChild(match)
       document.getElementById("team").appendChild(team)
       document.getElementById("location").appendChild(loc)
       document.getElementById("pos").appendChild(pos)
       document.getElementById("color").appendChild(color)
       document.getElementById("sHatch").appendChild(sHatch)
       document.getElementById("sBall").appendChild(sBall)
       document.getElementById("sTop").appendChild(sTop)
       document.getElementById("Smid").appendChild(Smid)
       document.getElementById("sBottom").appendChild(sBottom)
       document.getElementById("sShip").appendChild(sShip)
       document.getElementById("tHatch").appendChild(tHatch)
       document.getElementById("tBall").appendChild(tBall)
       document.getElementById("tTop").appendChild(tTop)
       document.getElementById("tMid").appendChild(tMid)
       document.getElementById("tBottom").appendChild(tBottom)
       document.getElementById("tShip").appendChild(tShip)
       document.getElementById("climb").appendChild(climb)
       document.getElementById("rScore").appendChild(rScore)
       document.getElementById("bScore").appendChild(bScore)
       document.getElementById("winner").appendChild(winner)
       document.getElementById("notes").appendChild(notes)



   }

