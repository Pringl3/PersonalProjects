// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAASOFy19mDnpnPtDz42oyZrPAQ78Xv_xY",
  authDomain: "login-createacc.firebaseapp.com",
  projectId: "login-createacc",
  storageBucket: "login-createacc.firebasestorage.app",
  messagingSenderId: "700644364748",
  appId: "1:700644364748:web:26ba7b31c3f5dca356cd69",
  measurementId: "G-MCBCE47Y0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signinBtn = document.getElementById('signinBtn');
signinBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Sign In button clicked');

  // inputs
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  console.log('Email:', email);
  console.log('Password:', password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('Logging in to account...');
      window.location.href = 'profile.html';
      // You can save the username to the user's profile or database here
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
      alert(errorMessage);
      // ..
    });
});