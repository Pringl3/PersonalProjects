import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const auth = getAuth();

const signoutBtn = document.getElementById('signoutBtn');
signoutBtn.addEventListener('click', (event) => {
  event.preventDefault();

  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = 'index.html';
  }).catch((error) => {
    // An error happened.
    console.error('Error:', error);
  });
});