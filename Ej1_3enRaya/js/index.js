var turno=0;
var elemento = new Array;
for (var i = 0; i < 9; i++) {
  elemento[i]=i;
}

function f(pos){
  var e = document.getElementById("c"+[pos]);
  var vez=document.getElementById("tur");
    
  if(turno==0){
    if(e.innerHTML=="O" || e.innerHTML=="X") {
      alert("¡Ocupado! Prueva otra vez.");
    }else {
      e.innerHTML="X";
      e.className="x";
      elemento[pos]= "X";
      turno=1;
      vez.innerHTML="Turno: O";
    }

  }else if(turno==1){
    if(e.innerHTML=="O" || e.innerHTML=="X") {
      alert("¡Ocupado! Prueva otra vez.");
    }else{
      e.innerHTML="O";
      e.className="O";
      elemento[pos]= "O";
      turno=0;
      vez.innerHTML="Turno: X";
    }
  }else{
    alert("Game Over")
  }
  
    
  if(elemento[0]==elemento[1] && elemento[0]==elemento[2]){
    alert("THE WINER IS: "+ elemento[0]);
    turno=3;
    vez.innerHTML="";
  }  
  if(elemento[3]==elemento[4] && elemento[3]==elemento[5]){
    alert("THE WINER IS: "+ elemento[3]);
    turno=3;
    vez.innerHTML="";
  } 
  if(elemento[6]==elemento[7] && elemento[6]==elemento[8]){
    alert("THE WINER IS: "+ elemento[6]);
    turno=3;
    vez.innerHTML="";
  } 
   

  if(elemento[0]==elemento[3] && elemento[0]==elemento[6]){
    alert("THE WINER IS: "+ elemento[0]);
    turno=3;
    vez.innerHTML="";
  } 
  if(elemento[1]==elemento[4] && elemento[1]==elemento[7]){
    alert("THE WINER IS: "+ elemento[1]);
    turno=3;
    vez.innerHTML="";
  }  
  if(elemento[2]==elemento[5] && elemento[2]==elemento[8]){
    alert("THE WINER IS: "+ elemento[2]);
    turno=3;
    vez.innerHTML="";
  } 
  


  if(elemento[0]==elemento[4] && elemento[0]==elemento[8]){
    alert("THE WINER IS: "+ elemento[0]);
    turno=3;
    vez.innerHTML="";
  } 
  if(elemento[2]==elemento[4] && elemento[2]==elemento[6]){
    alert("THE WINER IS: "+ elemento[2]);
    turno=3;
    vez.innerHTML="";
  }  
}

function reset(){
  for (var i = 0; i < 9; i++) {
    var e = document.getElementById("c"+[i]);
    e.innerHTML="";
    e.className="x";
    elemento[i]=i;
  }
  turno=0; 
  var vez=document.getElementById("tur");
  vez.innerHTML="Turno: X"; 
}