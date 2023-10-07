  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqaPfiwR1rAH3825GO9drPzdnurb-payE",
    authDomain: "fir-7eecb.firebaseapp.com",
    projectId: "fir-7eecb",
    storageBucket: "fir-7eecb.appspot.com",
    messagingSenderId: "336502752784",
    appId: "1:336502752784:web:5e117355a8859ff545ec95",
    measurementId: "G-TX720ZZDGE"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);