var firebaseConfig = {
      apiKey: "AIzaSyCOiqbacEfLGZsiAUC8GHo5MSlmv40IKtI",
      authDomain: "class-test-1071e.firebaseapp.com",
      databaseURL: "https://class-test-1071e-default-rtdb.firebaseio.com",
      projectId: "class-test-1071e",
      storageBucket: "class-test-1071e.appspot.com",
      messagingSenderId: "450506227336",
      appId: "1:450506227336:web:dcb4c4ff36c8cc9e2c693d"
};
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
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
