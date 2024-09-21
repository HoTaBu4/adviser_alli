import { client } from "../fetchClient";
export const loginUser = (data) => {
    return client.post('/auth/token/', data);
};
export const registerUser = (data) => {
    return client.post('/auth/user/', data);
};
export const logOutUser = () => {
    return client.get('/user/logout');
};
