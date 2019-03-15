var userInfo = [
  {
    username: "Henry", 
    password: "King",
    animals: ["Pandas", "monkeys","foxes", "Birds"],
    forestName: "animalKingdom",
    fruits: ["bananas", "berries", "mangos"]
  },
  {
    username: "Annie", 
    password: "spots",
    animals: ["ants", "snakes","scorpions", "eagles"],
    forestName: "The green canyon",
    fruits: ["cactus", "cherry", "grapes"]
  },
  {
    username: "tally",
    password: "red"
  }
]

function addUsername(){
    
  userInfo.push({username: document.getElementById("cu").value, password: document.getElementById("cp").value})

  
  console.log(userInfo)
  
}

function Login(){
  
  var userData;

  var enterUser = document.getElementById("lu").value;
  var enterPass = document.getElementById("lp").value;
  
  console.log("User entered " + enterUser 
             + " " + enterPass);
  
  
  for(var i = 0; i < userInfo.length; i++){
    if(userInfo[i].username === enterUser && userInfo[i].password === enterPass){
      userData = userInfo[i];
    }
    
  }
  
  if(userData){
    console.log("Found username and Password")
    userPageSwitch()
    initUser(userData)
  } 
}

function userPageSwitch(){
  document.getElementById("up").classList.remove("hidden");
  document.getElementById("up").classList.add("show");
  
  
  document.getElementById("log").classList.remove("show");
  document.getElementById("log").classList.add("hidden");
 document.getElementById("main").classList.remove("bgPic");
}

function initUser(data){
  document.getElementById("userh1").innerHTML = data.username
}

function getCurrentUserIndex(){
  
  var username = document.getElementById("userh1").innerHTML
  
  for(var i = 0; i < userInfo.length; i++){
    if(userInfo[i].username == username) return i
  }
  
  return -1
}

function addAnimal(){
  var user_i = getCurrentUserIndex();
  if(user_i == -1){
    console.log("NOO USER!!")
    return "NO USER!!!"; 
  }
  
  var animalToAdd = document.getElementById("animalText").value
  
  userInfo[user_i].animals.push(animalToAdd)
 console.log(userInfo[user_i]) 
  
  
  setForestImage("https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/tiger-tigerdroppings-650_081016053408.jpeg?qKKGfW6rFq5JNjnE9JvfIoef5Tk5ZFTS")
}


function setForestImage(urlImage){
  document.getElementById("mydiv").setAttribute("src", urlImage);
  
 
}


