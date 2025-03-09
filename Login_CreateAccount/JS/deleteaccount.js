import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const auth = getAuth();

const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', () => {
    const user = auth.currentUser;
    user.delete().then(() => {
        signOut(auth).then(() => {
            alert("Account deleted successfully");
            window.location.href = "index.html";
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    });
});