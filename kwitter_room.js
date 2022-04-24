var firebaseConfig = {
  apiKey: "AIzaSyDMhy7GRIDqdyx5SYovfa1R1k8sMPx11UQ",
  authDomain: "kwitter101-4ddb4.firebaseapp.com",
  databaseURL: "https://kwitter101-4ddb4-default-rtdb.firebaseio.com",
  projectId: "kwitter101-4ddb4",
  storageBucket: "kwitter101-4ddb4.appspot.com",
  messagingSenderId: "791013412544",
  appId: "1:791013412544:web:0198b65d760e1eec7e6725",
  measurementId: "G-FP08NEXCRE"
};



  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
