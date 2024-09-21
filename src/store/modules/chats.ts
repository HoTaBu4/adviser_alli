import { Module } from "vuex";
import { RootState } from "../store";
import { ChatState } from "../types/ChatType";

const state: ChatState = {
  messages: [],
};

const getters = {
  allMessages: (state: ChatState) => state.messages,
};

const mutations = {
  addMessage(state: ChatState, message: string) {
    state.messages.push(message);
  },
  clearMessages(state: ChatState) {
    state.messages = [];
  },
};

const actions = {
  sendMessage({ commit }: any, message: string) {
    commit("addMessage", message);
  },
  clearChat({ commit }: any) {
    commit("clearMessages");
  },
};

const chats: Module<ChatState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default chats;