//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBcXugCtd6Af0ElfEKkRwrp89KCh6sg8wA",
    authDomain: "kwittr-1b192.firebaseapp.com",
    projectId: "kwittr-1b192",
    storageBucket: "kwittr-1b192.appspot.com",
    messagingSenderId: "427545167776",
    appId: "1:427545167776:web:f6a86207da51e6e86a06c5",
    measurementId: "G-P56LGRMDGZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
        room_name = document.getElementById("room name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room name", room_name);

        window.location = "kwitter_room.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data)
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'> "+ message + "</h4>";
    like_button ="<button class='btn btn-waring' id="+firebase_message_id+" value"+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectTORoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}

function send() 
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })

    document.getElementById("msg").value = "";
}

function updateLike()
{
    console.log("clicked on like button - "+ message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });

}