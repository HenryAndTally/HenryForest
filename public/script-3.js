//Change to general sprite spawner and add random spawn position


function tree(){
  var newtree = document.createElement("img");
//  newtree.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7Gyt4sz-GjlbJDR6JFdrJY0Wry7nJaG4EXj9YGXGhqGvbScQ");
    newtree.setAttribute("src", "images.png");
  newtree.setAttribute("id", "mydiv");
  newtree.setAttribute("class", "im");
  newtree.setAttribute("onclick", "dragTree(this)");
  dragElement(newtree);
 alert
  var topv;
  var leftv;
  topv = randomtopv();
  leftv= randomleftv();
  newtree.style.top = topv;
  newtree.style.left = leftv;
  newtree.style.position = "absolute";
  
  document.getElementById("forrestrow").appendChild(newtree)
  
}



function tiger(){
  var newtiger = document.createElement("img");
  newtiger.setAttribute("src", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/tiger-tigerdroppings-650_081016053408.jpeg?qKKGfW6rFq5JNjnE9JvfIoef5Tk5ZFTS");
  newtiger.setAttribute("id", "mydiv");
  newtiger.setAttribute("class", "im");
  newtiger.setAttribute("onclick", "dragTree(this)");
  dragElement(newtiger);

  var topv;
  var leftv;

  topv = Math.random()*390  + 121 + "px";
  leftv= Math.random()*380   + 25 + "px";

  newtiger.style.top = topv
  newtiger.style.left = leftv
  
  
  document.getElementById("forrestrow").appendChild(newtiger)
}



function panda(){
  var newpanda = document.createElement("img");
//  newpanda.setAttribute("src", "https://ae01.alicdn.com/kf/HTB1uo0hPXXXXXXOXVXXq6xXFXXXX/11-13CM-GIANT-PANDA-Car-Stickers-Cute-Panda-Cartoon-Animal-Window-Decoration-Car-Decals.jpg_640x640.jpg");
  newpanda.setAttribute("src", "panda.png");
  newpanda.setAttribute("id", "mydiv");
  newpanda.setAttribute("class", "im");
  newpanda.setAttribute("onclick", "dragTree(this)");
  dragElement(newpanda);

  var topv;
  var leftv;

  topv = Math.random()*390  + 121 + "px";
  leftv= Math.random()*380   + 25 + "px";

  newpanda.style.top = topv
  newpanda.style.left = leftv
  
  document.getElementById("forrestrow").appendChild(newpanda)
}





function ani(){
  var newanimal = document.createElement("img");
  //  newpanda.setAttribute("src", "https://ae01.alicdn.com/kf/HTB1uo0hPXXXXXXOXVXXq6xXFXXXX/11-13CM-GIANT-PANDA-Car-Stickers-Cute-Panda-Cartoon-Animal-Window-Decoration-Car-Decals.jpg_640x640.jpg");
  newanimal.setAttribute("src", document.getElementById("animalpic").value);
  newanimal.setAttribute("id", "mydiv");
  newanimal.setAttribute("class", "im");
  newanimal.setAttribute("onclick", "dragTree(this)");
  dragElement(newanimal);

  var topv;
  var leftv;

  topv = Math.random()*390  + 121 + "px";
  leftv= Math.random()*380   + 25 + "px";

  //investigate getclientRect

  newanimal.style.top = topv
  newanimal.style.left = leftv
  
  document.getElementById("forrestrow").appendChild(newanimal)
}












function randomtopv(){
  return   `${(Math.random()*250) + 200}px`;
}

function randomleftv(){

  return `${(Math.random()*500) + 200}px` ;
  
}

