let userType = ""

document.getElementById("reporter-btn").addEventListener("click", function() {
    location.href = "https://immense-fjord-85744.herokuapp.com/client/categories.html";
    //userType = "reporter";
});
document.getElementById("finder-btn").addEventListener("click", function() {
    location.href = "https://immense-fjord-85744.herokuapp.com/client/categories.html";
    //userType = "finder";
});

export function getUserType() {
    return userType;
}