import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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

const user = auth.currentUser;

function updateUserProfile(user) {
    const displayName = user.displayName;
    const email = user.email;
    const date_created = user.metadata.creationTime;
    const photoURL = user.photoURL;

    document.getElementById("username").textContent = "Username: " + displayName;
    document.getElementById("email").textContent = "Email: " +  email;
    document.getElementById("date-created").textContent = "Accout Created: " + date_created;
    document.getElementById("profile_img").src = photoURL
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;

    } else {
        window.location.href = "index.html";
    }
});