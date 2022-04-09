import * as crud from "./crud.js";



document.getElementById("addItem").addEventListener("click", async (e) => {
    const category = document.getElementById("category").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;
    const image = document.getElementById("image").value;
    const id = document.getElementById("id").value;
    const newItem = await crud.createItem(category, location, contact, time, image, id);
});

document.getElementById("updateButton").addEventListener("click", async (e) => {
    const category = document.getElementById("category").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;
    const image = document.getElementById("image").value;
    const id = document.getElementById("id2").value;
    // console.log(id);
    const newItem = await crud.updateItem(category, location, contact, time, image, id);
    window.location.reload();
});

document.getElementById("deleteButton").addEventListener("click", async (e) => {
    const id = document.getElementById("id2").value;
    const newItem = await crud.deleteItem(id);
    window.location.reload();
});


async function CreateTableFromJSON() {
    // const jsonob1 = { category: "electronics", location: "library", contact: "Sid", time: "7:20pm", image: "image1", id: "1" };
    // const jsonob2 = { category: "mobile", location: "lgrc", contact: "Me", time: "5:40pm", image: "image2", id: "2" };
    // const jsonob3 = { category: "wallet", location: "office", contact: "Ghost", time: "9:40pm", image: "image3", id: "3" };

    let myBooks = [];
    // myBooks.push(jsonob1, jsonob2, jsonob3);
    // const id = document.getElementById("id");
    // const itemthing = crud.readItem(id);

    const response = await fetch("./item.json")

    // if (!itemdata.ok) {
    //     console.log("Failed to load");
    //     return;
    // }
    if (!response.ok) {
        console.log("Failed to load");
        return;
    }
    let itemdata = await response.json();
    console.log(itemdata)
    // // console.log(itemdata)
    for (let val of Object.keys(itemdata)) {
        myBooks.push(itemdata[val])
    }

    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    // var table = document.createElement("table");
    let table = document.getElementById("tabledata")
    table.classList.add('table');
    table.classList.add('table-hover');
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    let tr = table.insertRow(-1); // TABLE ROW.
    tr.classList.add('cell');
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (let i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.setAttribute("data-bs-toggle", "modal");
            tabCell.setAttribute("data-bs-target", "#exampleModal");
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("span");
    divContainer.innerHTML = " ";
    divContainer.appendChild(table);
}

CreateTableFromJSON();