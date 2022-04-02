export async function createLogin(email, password) {
    const response = await fetch(`/login/create?email=${email}&password=${password}`, {
        method: 'POST',
    });
    const data = await response.json();
    return data;
}

export async function createItem(category, location, contact, time, image, id) {
    const response = await fetch(`/reporter/create?category=${category}&location=${location}&contact=${contact}&time=${time}&image=${image}&id=${id}`, {
        method: 'POST',
    });
    const data = await response.json();
    return data;
}

export async function updateItem(category, location, contact, time, image, id) {
    const response = await fetch(`/reporter/update?category=${category}&location=${location}&contact=${contact}&time=${time}&image=${image}&id=${id}`, {
        method: 'PUT',
    });
    const data = await response.json();
    return data;
}

export async function deleteItem(id) {
    const response = await fetch(`/reporter/delete?id=${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}