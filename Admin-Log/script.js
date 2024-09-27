const password = "admin123";
const input = document.querySelector("input")

input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 ) {
        if (input.value == password) {
            alert("Password Correct");
            window.location.replace("https://www.google.co.uk");
        } else if (input.value != password) {
            alert("Password Incorrect");
        }
    }
})