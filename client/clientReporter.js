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