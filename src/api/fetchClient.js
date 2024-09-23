const BASE_URL = "http://127.0.0.1:8000";
async function request(url, method = "GET", data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    const response = await fetch(BASE_URL + url, options);
    return await response.json();
}
export const client = {
    get: (url) => request(url),
    post: (url, data) => request(url, 'POST', data),
    patch: (url, data) => request(url, 'PATCH', data),
    delete: (url) => request(url, 'DELETE'),
};
