export async function createLogin(email, password) {
    const response = await fetch(`/login/create?email=${email}&password=${password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    });
    const data = await response.json();
    return data;
}

export async function readLogin(email, password) {
    const response = await fetch(`/login/read?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    return data;
}

export async function createItem(category, location, contact, time, image, id) {
    const response = await fetch(`/reporter/create?category=${category}&location=${location}&contact=${contact}&time=${time}&image=${image}&id=${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: category, location: location, contact: contact, time: time, image: image, id: id }),
    });
    const data = await response.json();
    return data;
}

export async function updateItem(category, location, contact, time, image, id) {
    try {
        const response = await fetch(`/reporter/update?category=${category}&location=${location}&contact=${contact}&time=${time}&image=${image}&id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category: category, location: location, contact: contact, time: time, image: image, id: id }),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function deleteItem(id) {
    try {
        const response = await fetch(`/reporter/delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}