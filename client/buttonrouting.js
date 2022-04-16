import * as crud from "./crud.js";

document.getElementById("submit").addEventListener("click", async(e) => {
    const email = document.getElementById("email").value;
    const passcode = document.getElementById("passcode").value;
    const loginthing = await crud.readLogin(email, passcode);

    if (loginthing.error) {
        console.log("error");
    } else {
        console.log("no error");
<<<<<<< HEAD
        location.href = "https://localhost:3000/client/reporterFinder.html"
=======
        location.href = "https://immense-fjord-85744.herokuapp.com/client/reporterFinder.html"
>>>>>>> 50fa17538c7045956e73b58f4162abbbff132d29
    }
});