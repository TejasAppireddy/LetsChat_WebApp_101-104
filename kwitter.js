const firebaseConfig = {
    apiKey: "AIzaSyCOiqbacEfLGZsiAUC8GHo5MSlmv40IKtI",
    authDomain: "class-test-1071e.firebaseapp.com",
    databaseURL: "https://class-test-1071e-default-rtdb.firebaseio.com",
    projectId: "class-test-1071e",
    storageBucket: "class-test-1071e.appspot.com",
    messagingSenderId: "450506227336",
    appId: "1:450506227336:web:dcb4c4ff36c8cc9e2c693d"
  };

  firebaseConfig.initializeApp(firebaseConfig);

  function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }