import * as crud from "./crud.js";
let userType = ""
document.getElementById("reporter-btn").onclick = function () {
    location.href = "https://immense-fjord-85744.herokuapp.com/client/categories.html";
    userType = "reporter";
};
document.getElementById("finder-btn").onclick = function () {
    location.href = "https://immense-fjord-85744.herokuapp.com/client/categories.html";
    userType = "finder";
};

export function getUserType() {
    return userType;
}
