// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAmtwzy1Vl86kL6O-mOxXGBmzvjXe-sils",
    authDomain: "naman-jain-p1.firebaseapp.com",
    projectId: "naman-jain-p1",
    storageBucket: "naman-jain-p1.appspot.com",
    messagingSenderId: "777455471511",
    appId: "1:777455471511:web:51a6fd89c2bc576acf12d2",
    measurementId: "G-ZFE0H57DW8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);