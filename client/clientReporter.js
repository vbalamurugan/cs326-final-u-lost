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
    console.log(id);
    const newItem = await crud.updateItem(category, location, contact, time, image, id);
});

document.getElementById("deleteButton").addEventListener("click", async (e) => {
    const id = document.getElementById("id2").value;
    const newItem = await crud.deleteItem(id);
});