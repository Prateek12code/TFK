var firebaseConfig = {
      apiKey: "AIzaSyDo8HRUCPuX8M3398emdDheGuE52S8KDJs",
      authDomain: "y-or-why.firebaseapp.com",
      databaseURL: "https://y-or-why-default-rtdb.firebaseio.com",
      projectId: "y-or-why",
      storageBucket: "y-or-why.appspot.com",
      messagingSenderId: "833893692988",
      appId: "1:833893692988:web:c4ef376c145e68dca37539"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function send()
    {
      msg = document.getElementById("msg").value = "";
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }

    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout()
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}