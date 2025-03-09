// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

const form = document.getElementById('registerForm');
const registerBtn = document.getElementById('registerBtn');
registerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Register button clicked');

  // inputs
  const username = document.getElementById('username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const photoURL = document.getElementById('profile-img-url').value; // Assuming you have an input for profile image URL

  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Photo URL:', photoURL);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('User created:', user);

      // Update user profile
      updateProfile(user, {
        displayName: username,
        photoURL: photoURL
      }).then(() => {
        alert('Account created and profile updated!');
        window.location.href = 'profile.html';
      }).catch((error) => {
        console.error('Error updating profile:', error);
        alert(error.message);
      });

      form.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
      alert(errorMessage);
    });
});