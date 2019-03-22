// var ui = new firebaseui.auth.AuthUI(firebase.auth());

var Num = 0;


function back(){
  if(Num == 0)
    {
      Num = 1;
//      document.getElementById("bg").removeAttribute("class"); 
      document.getElementById("bg").setAttribute("class", "river");
    }
  else if(Num == 1)
    {
      Num = 0;
      //      document.getElementById("bg").removeAttribute("class"); 
      document.getElementById("bg").setAttribute("class", "grass");
    }
}



function log(){
  
  
  //document.getElementById("up").classList.remove("show");
  //document.getElementById("up").classList.add("hidden");


  //document.getElementById("log").classList.remove("hidden");
  //document.getElementById("log").classList.add("show");
     
   firebase.auth().signout().then(function() {
    window.location= '/index.html';
   });

  
     //hi tally           
}



var vid = document.getElementById("myVideo");
vid.volume = 0.2;


var but = 1;
function music(){

  
  if(but == 1){
      vid.volume = 0.0;
    but = but - 1;
  }
  else if(but == 0){
    vid.volume = 0.2;
    but = but + 1;
  }
}