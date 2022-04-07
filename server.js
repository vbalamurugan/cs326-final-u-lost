import { readFile } from 'fs/promises';
import * as http from 'http';
import * as url from 'url';
import * as crud from './crud.js';

// The purpose of this server is to maintain a single data object of a person
// and their age. This data object is stored in the global variable `data`.

// Data maintained by this server.
// A basic server function to implement a simple RESTful API.
async function basicServer(request, response) {
    // Parse the URL to get the pathname and the query parameters.
    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Grab the HTTP method.
    const method = request.method;

    // Implement each of the CRUD operations.
    //   NOTE: for clarity we have not implemented any error checking. You will
    //         need to add error checking in your team project.
    if (method === 'POST' && pathname.startsWith('/login/create')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const loginthing = await crud.createLogin(query.email, query.password);
        console.log(JSON.stringify(loginthing));
        response.write(JSON.stringify(loginthing));
        response.end();
    } else if (method === 'POST' && pathname.startsWith('/reporter/create')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const newItem = await crud.createItem(query.category, query.location, query.contact, query.time, query.image, query.id);
        console.log(JSON.stringify(newItem));
        response.write(JSON.stringify(newItem));
        response.end();
    } else if (method === 'GET' && pathname.startsWith('/login/read')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const login = await crud.readLogin(query.name);
        response.write(login ? JSON.stringify(login) : '{}');
        response.end();
    } else if (method === 'PUT' && pathname.startsWith('/reporter/update')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const item = await crud.updateItem(query.category, query.location, query.contact, query.time, query.image);
        response.write(person ? JSON.stringify(item) : '{}');
        response.end();
    } else if (method === 'DELETE' && pathname.startsWith('/reporter/delete')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const item = await crud.deleteItem(query.id);
        response.write(person ? JSON.stringify(item) : '{}');
        response.end();
    } else if (method === 'GET' && pathname.startsWith('/person/all')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const people = await crud.readAllPeople();
        response.write(JSON.stringify(people));
        response.end();
    } else if (method === 'DELETE' && pathname.startsWith('/person/all-delete')) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const empty = await crud.deleteAllPeople();
        response.write(JSON.stringify(empty));
        response.end();
    } else {
        try {
            // Determine the content type of the requested file (if it is a file).
            let type = '';
            if (pathname.endsWith('.css')) {
                type = 'text/css';
            } else if (pathname.endsWith('.js')) {
                type = 'text/javascript';
            } else if (pathname.endsWith('.html')) {
                type = 'text/html';
            } else {
                type = 'text/plain';
            }
            // -> client/index.html
            const data = await readFile(pathname.substring(1), 'utf8');
            response.writeHead(200, { 'Content-Type': type });
            response.write(data);
        } catch (err) {
            response.statusCode = 404;
            response.write('Not found');
        }
        response.end();
    }
}

// Start the server on port 3000.
http.createServer(basicServer).listen(3000, () => {
    console.log('Server started on port 3000');
});