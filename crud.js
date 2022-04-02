import { readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';

const JSONLoginfile = "login.json";
const JSONItemfile = "item.json";

// async function saveCounters() {
//     try {
//         const data = JSON.stringify(counters);
//         await writeFile(JSONfile, data, { encoding: 'utf8' });
//     } catch (err) {
//         console.log(err);
//     }
// }

async function init() {
    try {
        // Check if the file exists.
        await access(JSONLoginfile, constants.R_OK | constants.W_OK);
        await access(JSONItemfile, constants.R_OK | constants.W_OK);
    } catch (err) {
        // File does not exist. Create it.
        await writeFile(JSONLoginfile, '{}');
        await writeFile(JSONItemfile, '{}');
    }
}

export async function createLogin(email, password) {
    const loginthing = { email: email, password: password };
    try {
        const data = await readFile(JSONLoginfile, 'utf8');
        const loginthings = JSON.parse(data);
        loginthings[email] = loginthing;
        await writeFile(JSONLoginfile, JSON.stringify(loginthings));
        return loginthing;
    } catch (err) {
        console.error('Error writing to file: ', err);
        return undefined;
    }
}

export async function createItem(category, location, contact, time, image, id) {
    const newItem = { category: category, location: location, contact: contact, time: time, image: image, id: id };
    try {
        const data = await readFile(JSONItemfile, 'utf8');
        const items = JSON.parse(data);
        console.log(category);
        items[id] = newItem;
        await writeFile(JSONItemfile, JSON.stringify(items));
        return newItem;
    } catch (err) {
        console.error('Error writing to file: ', err);
        return undefined;
    }
}

init()