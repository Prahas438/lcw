//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCTZrGl2msq-_ILI1o8XVRsLdFBgajEP8A",
    authDomain: "kwitter-23f44.firebaseapp.com",
    databaseURL: "https://kwitter-23f44-default-rtdb.firebaseio.com/",
    projectId: "kwitter-23f44",
    storageBucket: "kwitter-23f44.appspot.com",
    messagingSenderId: "62771781903",
    appId: "1:62771781903:web:c50a26a18b0623e5915e7a"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name- "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomname(this.id)' >#"+ Room_names +"</div> <hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="lcw_page.html";
}
function RedirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="lcw_page.html";
}