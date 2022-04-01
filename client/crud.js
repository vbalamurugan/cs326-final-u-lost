export async function createLogin(email, password) {
    const response = await fetch(`/login/create?email=${email}&password=${password}`, {
        method: 'POST',
    });
    const data = await response.json();
    return data;
}