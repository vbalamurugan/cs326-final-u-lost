import { getUserType } from "./buttonrouting2.js"

document.getElementById("electronics-btn").addEventListener("click", function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
});
document.getElementById("idcards-btn").addEventListener("click", function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
});
document.getElementById("keys-btn").addEventListener("click", function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
});
document.getElementById("books-btn").addEventListener("click", function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
});
document.getElementById("clothing-btn").addEventListener("click", function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
});
document.getElementById("other-btn").addEventListener("click", function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
});