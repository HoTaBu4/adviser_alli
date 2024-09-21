import { Module } from "vuex";
import { RootState } from "../store";
import { ChatState } from "../types/ChatType";
declare const chats: Module<ChatState, RootState>;
export default chats;
