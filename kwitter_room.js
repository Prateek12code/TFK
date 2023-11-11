
var firebaseConfig = {
      apiKey: "AIzaSyDo8HRUCPuX8M3398emdDheGuE52S8KDJs",
      authDomain: "y-or-why.firebaseapp.com",
      databaseURL: "https://y-or-why-default-rtdb.firebaseio.com",
      projectId: "y-or-why",
      storageBucket: "y-or-why.appspot.com",
      messagingSenderId: "833893692988",
      appId: "1:833893692988:web:537bb1dac33d13e7a37539"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + room_names);
     row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#" + room_names +"</div><hr>";
     document.getElementById(output).innerHTML += row;

     //End code
     });});}
getData();

function redirectToRoomName(Name){
     console.log(Name);
     localStorage.setItem("room_name", Name);
     window.location = "kwitter_room.html";
}
