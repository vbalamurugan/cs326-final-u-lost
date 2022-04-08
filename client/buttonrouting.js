import * as crud from "./crud.js";

// document.getElementById("reporter-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/categories.html";
// };
// document.getElementById("finder-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/categories.html";
// };
// document.getElementById("electronics-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/itemListFinder.html";
// };
// document.getElementById("idcards-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/itemListFinder.html";
// };
// document.getElementById("keys-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/itemListFinder.html";
// };
// document.getElementById("books-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/itemListFinder.html";
// };
// document.getElementById("clothing-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/itemListFinder.html";
// };
// document.getElementById("other-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/itemListFinder.html";
// };

document.getElementById("reporter-btn").onclick = function () {
    location.href = "http://localhost:3000/client/categories.html";
};

// document.getElementById("finder-btn").onclick = function () {
//     location.href = "http://127.0.0.1:5500/GroupProject/cs326-final-u-lost/categories.html";
// };
document.getElementById("submit").addEventListener("click", async (e) => {
    const email = document.getElementById("email").value;
    const passcode = document.getElementById("passcode").value;
    const loginthing = await crud.readLogin(email, passcode);

    if (loginthing.error) {
        console.log("error");
    }
    else {
        console.log("no error");
        location.href = "http://localhost:3000/client/reporterFinder.html"
    }
});