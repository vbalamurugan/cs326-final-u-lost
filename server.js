// https://expressjs.com
// https://expressjs.com/en/resources/middleware/morgan.html
import express from 'express';
import logger from 'morgan';
import { readFile, writeFile } from 'fs/promises';

const JSONItemfile = 'item.json';
const JSONLoginfile = 'login.json';

let items = {};
let logins = {};

async function reloadItems(filename) {
    try {
        const data = await readFile(filename, { encoding: 'utf8' });
        items = JSON.parse(data);
    } catch (err) {
        items = {};
    }
}

async function saveItems() {
    try {
        const data = JSON.stringify(items);
        await writeFile(JSONItemfile, data, { encoding: 'utf8' });
    } catch (err) {
        console.log(err);
    }
}

async function reloadLogins(filename) {
    try {
        const data = await readFile(filename, { encoding: 'utf8' });
        logins = JSON.parse(data);
    } catch (err) {
        logins = {};
    }
}

async function saveLogins() {
    try {
        const data = JSON.stringify(logins);
        await writeFile(JSONLoginfile, data, { encoding: 'utf8' });
    } catch (err) {
        console.log(err);
    }
}

function idExists(id) {
    return id in items;
}

function emailExists(email) {
    return email in logins;
}


async function createLogin(response, email, password) {
    if (email === undefined) {
        // 400 - Bad Request
        response.status(400).json({ error: 'Email is required' });
    }
    else {
        await reloadLogins(JSONLoginfile);
        if (!emailExists) {
            logins[email] = { email: email, password: password };
            await saveLogins();
            response.status(200).json({ email: email, password: password });
        }
        else {
            response.status(403).json({ error: 'Email already in use' });
        }
    }
}

async function readLogin(response, email, password) {
    await reloadLogins(JSONLoginfile);
    if (emailExists(email)) {
        response.status(200).json({ email: email, password: password });
    } else {
        response.status(404).json({ error: `Item '${email}' Not Found` });
    }
}

async function readItem(response, id) {
    await reloadItems(JSONItemfile);
    if (idExists(id)) {
        const category = items[id].category;
        const location = items[id].location;
        const contact = items[id].contact;
        const time = items[id].time;
        const image = items[id].image;
        response.json({ category: category, location: location, contact: contact, time: time, image: image });
    } else {
        // 404 - Not Found
        response.status(400).json({ error: `Item '${id}' Not Found` });
    }
}

async function createItem(response, category, location, contact, time, image, id) {
    if (id === undefined) {
        // 400 - Bad Request
        response.status(400).json({ error: 'ID is required' });
    } else {
        await reloadItems(JSONItemfile);
        items[id] = { category: category, location: location, contact: contact, time: time, image: image, id: id };
        await saveItems();
        response.status(200).json({ category: category, location: location, contact: contact, time: time, image: image, id: id });
    }
}

async function updateItem(response, category, location, contact, time, image, id) {
    await reloadItems(JSONItemfile);
    if (idExists(id)) {
        console.log('HI');
        items[id] = { category: category, location: location, contact: contact, time: time, image: image, id: id };
        await saveItems();
        response.json({ category: category, location: location, contact: contact, time: time, image: image, id: id });
    } else {
        response.json({ error: `Item '${id}' Not Found` });
    }
}

async function deleteItem(response, id) {
    await reloadItems(JSONItemfile);
    if (idExists(id)) {
        const category = items[id].category;
        const location = items[id].location;
        const contact = items[id].contact;
        const time = items[id].time;
        const image = items[id].image;
        delete items[id];
        await saveItems();
        response.json({ category: category, location: location, contact: contact, time: time, image: image, id: id });
    } else {
        response.json({ error: `Item '${id}' Not Found` });
    }
}

const app = express();
const port = 3000;

app.use(logger('dev'));

// NEW: Add json and urlencoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/client', express.static('client'));

app.post('/login/create', (req, res) => {
    const options = req.body;
    createLogin(res, options.email, options.password);
});

app.get('/login/read', (req, res) => {
    const options = req.query;
    readLogin(res, options.email, options.password);
});

app.get('/reporter/read', (req, res) => {
    const options = req.query;
    readItem(res, options.id);
});

app.post('/reporter/create', (req, res) => {
    const options = req.body;
    createItem(res, options.category, options.location, options.contact, options.time, options.image, options.id);
});

app.put('/reporter/update', (req, res) => {
    const options = req.body;
    updateItem(res, options.category, options.location, options.contact, options.time, options.image, options.id);
});

app.delete('/reporter/delete', (req, res) => {
    const options = req.body;
    deleteItem(res, options.id);
});

app.get('*', (req, res) => {
    console.log(req.path);
    res.status(404).json({ message: 'Unknown Request' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});