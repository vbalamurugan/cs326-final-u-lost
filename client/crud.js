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
    try {
        const response = await fetch(`/login/read?email=${email}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function readItem(category) {
    try {
        const response = await fetch(`/reporter/read?category=${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function readItemsFinder(category) {
    try {
        const response = await fetch(`/finder/read?category=${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function createItem(category, location, contact, time, image) {
    const response = await fetch(`/reporter/create?category=${category}&location=${location}&contact=${contact}&time=${time}&image=${image}}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: category, location: location, contact: contact, time: time, image: image }),
    });
    const data = await response.json();
    return data;
}

export async function updateItem(location, contact, time, image, id) {
    try {
        const response = await fetch(`/reporter/update?location=${location}&contact=${contact}&time=${time}&image=${image}&id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ location: location, contact: contact, time: time, image: image, id: id }),
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

export async function createImage(image) {
    const formData = new FormData();
    formData.append("image", image.files[0]);
    console.log(image);
    const response = await fetch(`/image`, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json());

    return response;
    // console.log(response)
    // console.log("here2")
    // const data = await response.blob();
    // console.log("here2")
    // console.log(data)
    // return data;
}