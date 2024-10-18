import { Module } from "vuex";
import store, { RootState } from "../store";
import { LanguageState } from "../types/LanguageType";
import { Chat, responseDetails } from "../types/ChatType";
import { retrieveChat } from "../../api/chats/chats";
import { createMessageByUser, getSavedMassage } from "../../api/messages/messages";
import { AiResponseMessage, Message, SavedMessage } from "../types/MessagesType";

const getDefaultState = (): SelectedChatState => ({
  selectedChat: null,
  isLoading: false,
  isAiTyping: false,
  selecedSaveMessage: null,
});

export interface SelectedChatState {
  selectedChat: Chat | null ,
  selecedSaveMessage: SavedMessage | null,
  isLoading: boolean,
  isAiTyping: boolean,
}

const state: SelectedChatState = JSON.parse(JSON.stringify(getDefaultState()));

const getters = {
  SelectedChat: (state: SelectedChatState) => state.selectedChat,
}

const mutations = {
  setIsAiTyping (state: SelectedChatState, value: boolean) {
    state.isAiTyping = value
  },
  setSelectedSavedMessage(state:SelectedChatState, chat:SavedMessage) {
    state.selectedChat = null;
    state.selecedSaveMessage = chat
  },
  setSelectedChat(state: SelectedChatState, chat: Chat) {
    state.selecedSaveMessage = null;
    state.selectedChat = chat;
  },
  setLoading(state: SelectedChatState, variable: boolean) {
    state.isLoading = variable
  },
  addUserMessage(state: SelectedChatState, message: string) {
    if (state.selectedChat) {
      const obj = {
        'id': state.selectedChat.messages.length + 1,
        'content': message,
        'is_ai_response': false
      }

      state.selectedChat.messages.push(obj);
    }
  },
  addAiResponse (state:SelectedChatState,response: AiResponseMessage) {

    state.selectedChat?.messages.push({
        'id': response.id,
        'content': response.content,
        'is_ai_response': response.is_ai_response,
        'is_saved' : response.is_saved
      })
  },
  reset(state: SelectedChatState) {
    state = getDefaultState();
    // state.selectedChat = defaultState.selectedChat;
    // state.isLoading = defaultState.isLoading;
    // console.log(state);
  },
  resetChatAndSavedMessage(state: SelectedChatState) {
    state.selectedChat = null;
    state.selecedSaveMessage = null;
  },
  saveUnsaveSpesificMessage (state: SelectedChatState,payload:{ messageId: number, value: boolean }) {
    state.selectedChat?.messages.forEach((element: Message) => {
      if (element.id === payload.messageId) {
        element.is_saved = payload.value
      }
    })
  }
};

const actions = {
  async getChatHistory({ commit }: any, chatId: number) {
    commit('setLoading', true);

    retrieveChat(chatId)
      .then((response:Chat | responseDetails) => {
        if (!('details' in response)) {
          commit('setSelectedChat', {...response,'id': chatId})
        }
      })
      .catch((error) => console.log(error))
      .finally(() => commit('setLoading', false));
  },
  async getSavedMessage ({commit}: any, messageId: number) {
    commit('setLoading', true);
    getSavedMassage(messageId)
      .then((response) => {
        commit('setSelectedSavedMessage', response);
      })
      .finally(() => {
        commit('setLoading', false);
      })
  },
  async createMessage({commit}: any,payload: {chatId: number,text: string}) {
    commit('addUserMessage',payload.text);
    commit('setLoading', true);
    
    const obj = { 'content': payload.text};
  
    createMessageByUser(payload.chatId,obj)
     .then((data) => {
        commit('addAiResponse',data);
        commit('setIsAiTyping',true);
      })
  },
};

const language: Module<LanguageState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default language;

export const getChatHistory = (chatId: number) => {
  store.dispatch('selectedChat/getChatHistory',chatId)
}

export const createMessage = (chatId: number,text: string) => {
  store.dispatch('selectedChat/createMessage',{chatId,text})
}
