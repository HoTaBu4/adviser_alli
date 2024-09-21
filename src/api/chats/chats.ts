import { createChatType } from "../../assets/types/chat"
import { client } from "../fetchClient"

export const createChat = (data: createChatType) => {
  return client.post('/chats/create',data);
}

export const getAllChats = () => {
  return client.get('/chats/');
}

export const getSavedMassages = () => {
  return client.get('/chats/saved',);
}

// export const getChat