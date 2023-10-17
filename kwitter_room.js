
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
