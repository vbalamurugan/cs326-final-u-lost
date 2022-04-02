import * as crud from "./crud.js";

function flip() {
    document.querySelector('.cover').classList.toggle('signuppage');
}

document.querySelector('.sign-in-butn-btn').addEventListener('click', flip);

document.getElementById("signupbtn").addEventListener("click", async (e) => {
    const email = document.getElementById("email1").value;
    const password = document.getElementById("passcode1").value;
    const loginthing = await crud.createLogin(email, password);
    flip();
});

