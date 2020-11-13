// Import core dependencies (Firebase, Router, Shell)
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "vanilla-router";
import "./src/lup-shell.js";

// Document elements
const shell = document.getElementById("shell");

// Configure Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC__QXsAOJauebmQ_FG5-HYgX_wFkMhKKc",
  authDomain: "line-ups.firebaseapp.com",
  databaseURL: "https://line-ups.firebaseio.com",
  projectId: "line-ups",
  storageBucket: "line-ups.appspot.com",
  messagingSenderId: "508225472141",
  appId: "1:508225472141:web:2a5026e64508ec72ffc4c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
