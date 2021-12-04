
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRFyFO0tWvsrO1PbHXGIuUF3fIzQ2UHho",
  authDomain: "kwitter-app-cdc3e.firebaseapp.com",
  databaseURL: "https://kwitter-app-cdc3e-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-cdc3e",
  storageBucket: "kwitter-app-cdc3e.appspot.com",
  messagingSenderId: "1059013549399",
  appId: "1:1059013549399:web:db683620ab99bda934f212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
