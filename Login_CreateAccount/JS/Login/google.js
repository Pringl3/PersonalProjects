// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLoginBtn = document.getElementById('google_login');
googleLoginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = 'profile.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
    });
});