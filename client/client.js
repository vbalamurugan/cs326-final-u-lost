import * as crud from "./crud.js";

function flip() {
    document.querySelector('.cover').classList.toggle('signuppage');
}

document.querySelector('.sign-in-butn-btn').addEventListener('click', flip);

document.getElementById("signupbtn").addEventListener("click", async(e) => {
    const email = document.getElementById("email1").value;
    if (!email.includes("@")) {
        alert("Email invalid found")
    } else {
        const password = document.getElementById("passcode1").value;
        const loginthing = await crud.createLogin(email, password);
        flip();
    }

});

document.getElementById("submit").addEventListener("click", async(e) => {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Email invalid found");

    } else {
        const passcode = document.getElementById("passcode").value;
        const loginthing = await crud.readLogin(email, passcode);
        console.log(loginthing);
        if (loginthing.error) {
            console.log("error");
        } else {
            localStorage.setItem('storeEmail', JSON.stringify(email));
            localStorage.setItem('storePassword', JSON.stringify(passcode));
            localStorage.setItem('honestyScore', loginthing.honesty);
            console.log("no error");
            location.href = "https://glacial-scrubland-79174.herokuapp.com/client/reporterFinder.html";
        }
    }

});