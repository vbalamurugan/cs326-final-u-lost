import { readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';

const JSONfile = "ulost.json";

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
        await access(JSONfile, constants.R_OK | constants.W_OK);
    } catch (err) {
        // File does not exist. Create it.
        await writeFile(JSONfile, '{}');
    }
}

export async function createLogin(email, password) {
    const loginthing = { email: email, password: password };
    try {
        const data = await readFile(JSONfile, 'utf8');
        const loginthings = JSON.parse(data);
        loginthings[email] = loginthing;
        await writeFile(JSONfile, JSON.stringify(loginthings));
        return loginthing;
    } catch (err) {
        console.error('Error writing to file: ', err);
        return undefined;
    }
}

init()