
import { User } from "../../assets/types/user"
import { client } from "../fetchClient"

export const loginUser = (data: Omit<User, 'username'>) => {
  return client.post('/auth/token/', data)
}

export const registerUser = (data: User) => {
  return client.post('/auth/user/',data);
}

export const logOutUser = () => {
  return client.get('/user/logout');
}