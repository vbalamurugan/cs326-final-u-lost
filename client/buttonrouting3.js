import { getUserType } from "./buttonrouting2.js"

document.getElementById("electronics-btn").onclick = function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
};
document.getElementById("idcards-btn").onclick = function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
};
document.getElementById("keys-btn").onclick = function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
};
document.getElementById("books-btn").onclick = function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
};
document.getElementById("clothing-btn").onclick = function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
};
document.getElementById("other-btn").onclick = function() {
    userType = getUserType()
    if (userType === "finder") {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
    } else {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    }
};