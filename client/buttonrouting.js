let userType = ""

if ($("body").data("title") === "reporterFinder") {
    document.getElementById("reporter-btn").addEventListener("click", function() {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/categories.html";
        userType = "reporter";
    });
    document.getElementById("finder-btn").addEventListener("click", function() {
        location.href = "https://immense-fjord-85744.herokuapp.com/client/categories.html";
        userType = "finder";
    });
} else if ($("body").data("title") === "categories") {
    document.getElementById("electronics-btn").addEventListener("click", function() {
        if (userType === "finder") {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
        } else {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
        }
    });
    document.getElementById("idcards-btn").addEventListener("click", function() {
        if (userType === "finder") {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
        } else {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
        }
    });
    document.getElementById("keys-btn").addEventListener("click", function() {
        if (userType === "finder") {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
        } else {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
        }
    });
    document.getElementById("books-btn").addEventListener("click", function() {
        if (userType === "finder") {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
        } else {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
        }
    });
    document.getElementById("clothing-btn").addEventListener("click", function() {
        if (userType === "finder") {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
        } else {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
        }
    });
    document.getElementById("other-btn").addEventListener("click", function() {
        if (userType === "finder") {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListFinder.html";
        } else {
            location.href = "https://immense-fjord-85744.herokuapp.com/client/itemListReporter.html";
        }
    });
}