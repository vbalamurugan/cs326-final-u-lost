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
        alert("Email invalid found")

    } else {
        const passcode = document.getElementById("passcode").value;
        const loginthing = await crud.readLogin(email, passcode);
        if (loginthing.error) {
            console.log("error");
        } else {
            console.log("no error");
            location.href = "http://localhost:3000/client/reporterFinder.html";
        }
    }

});