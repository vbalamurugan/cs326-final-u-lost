document.getElementById("electronics-btn").addEventListener("click", function() {
    localStorage.setItem("category", "Electronics")
    location.href = "http://localhost:3000/client/itemListReporter.html";;
});
document.getElementById("idcards-btn").addEventListener("click", function() {
    localStorage.setItem("category", "ID Cards")
    location.href = "http://localhost:3000/client/itemListReporter.html";
});
document.getElementById("keys-btn").addEventListener("click", function() {
    localStorage.setItem("category", "Keys")
    location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
});
document.getElementById("books-btn").addEventListener("click", function() {
    localStorage.setItem("category", "Books")
    location.href = "http://localhost:3000/client/itemListReporter.html"; //"https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
    //"https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
});
document.getElementById("clothing-btn").addEventListener("click", function() {
    localStorage.setItem("category", "Clothing")
    location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
});
document.getElementById("other-btn").addEventListener("click", function() {
    localStorage.setItem("category", "Other")
    location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
});