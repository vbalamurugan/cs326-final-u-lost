import * as crud from "./crud.js";

async function CreateTableFromJSON() {
    let myBooks = [];

    const response = await fetch("./item.json")

    if (!response.ok) {
        console.log("Failed to load");
        return;
    }
    let itemdata = await response.json();

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
        th.innerHTML = col[i].toUpperCase();
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
            tabCell.addEventListener('click', () => {
                document.getElementById('id2').value = myBooks[i].id;
                document.getElementById('category2').value = myBooks[i].category;
                document.getElementById('location2').value = myBooks[i].location;
                document.getElementById('time2').value = myBooks[i].time;
                document.getElementById('contact2').value = myBooks[i].contact;
            });
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("span");
    divContainer.innerHTML = " ";
    divContainer.appendChild(table);
}

CreateTableFromJSON();