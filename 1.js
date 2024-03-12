// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC7LDr35050odGjL650IkywbgANvpntjII",
    authDomain: "encryptiononwebsite.firebaseapp.com",
    projectId: "encryptiononwebsite",
    storageBucket: "encryptiononwebsite.appspot.com",
    messagingSenderId: "296077324273",
    appId: "1:296077324273:web:623acbd9f4c77fb2885e50"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signup(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=> alert(e.message));

    alert("signed up");
  }

  function login(){
    document.location.href="2.html";
  }
