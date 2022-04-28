import * as crud from "./crud.js";

document.getElementById("addItem").addEventListener("click", async(e) => {
    const email = localStorage.getItem("storeEmail");
    const category = document.getElementById("category").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;
    const image = document.getElementById("image");
    console.log("image");
    let newImg = await crud.createImage(image);
    const newItem = await crud.createItem(category, location, contact, time, newImg, email);
    window.location.reload();

});
document.getElementById("addplus").addEventListener("click", () => {
    document.getElementById("category").value = localStorage.getItem("category");
})

document.getElementById("updateButton").addEventListener("click", async(e) => {
    // const category = document.getElementById("category2").value;
    const time = document.getElementById("time2").value;
    const location = document.getElementById("location2").value;
    const contact = document.getElementById("contact2").value;
    const image = document.getElementById("image2");
    const id = document.getElementById("id2").value;
    let newImg = await crud.createImage(image);
    const newItem = await crud.updateItem(location, contact, time, newImg, id);
    window.location.reload();
});

document.getElementById("deleteButton").addEventListener("click", async(e) => {
    const id = document.getElementById("id2").value;
    const newItem = await crud.deleteItem(id);
    window.location.reload();
});


async function CreateTableFromJSON() {
    let myBooks = [];
    //const response = await fetch("./item.json");

    // const response = await fetch(`/reporter/read?category=${category}`, { method: "GET" });
    // console.log(response)
    // if (!response.ok) {
    //     console.log("Failed to load");
    //     return;
    // }

    // let itemdata = await response.json();
    let itemdata = await crud.readItem(localStorage.getItem('category'));
    document.getElementById("hScore").innerHTML = "Honesty Score: " + localStorage.getItem('honestyScore').toString();
    console.log("itemdata", itemdata);
    for (let val of Object.keys(itemdata)) {
        myBooks.push(itemdata[val])
    }
    console.log(myBooks)

    let col = [];
    for (let i = 0; i < myBooks.length; i++) {
        for (let key in myBooks[i]) {
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
    for (let i = 0; i < col.length-1; i++) {
        let th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i].toUpperCase();
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (let i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length-1; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.setAttribute("data-bs-toggle", "modal");
            tabCell.setAttribute("data-bs-target", "#exampleModal");
            tabCell.innerHTML = myBooks[i][col[j]];
            tabCell.addEventListener('click', async() => {
                document.getElementById('id2').value = myBooks[i]._id;
                document.getElementById('category2').value = myBooks[i].category;
                document.getElementById('location2').value = myBooks[i].location;
                document.getElementById('time2').value = myBooks[i].time;
                document.getElementById('contact2').value = myBooks[i].contact;
                // console.log("HERE", myBooks[i].image)
                // console.log("HERE2", await crud.readImage(myBooks[i].image))
                // console.log("ourimage   ", "data:@file/jpeg;base64,"+ window.Base64.encode(await crud.readImage(myBooks[i].image)))
                // document.getElementById('dis_image').src = "data:@file/jpeg;base64,"+window.Base64.encode(await crud.readImage(myBooks[i].image));
                console.log("HERE", myBooks[i].image)
                const response = await crud.readImage(myBooks[i].image);
                document.getElementById('dis_image').src = URL.createObjectURL(response)

                console.log("HERE3", document.getElementById('dis_image').src)
            });
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("span");
    divContainer.innerHTML = " ";
    divContainer.appendChild(table);
}

CreateTableFromJSON();