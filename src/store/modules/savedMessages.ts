import { Module } from "vuex";
import store, { RootState } from "../store";
import { LanguageState } from "../types/LanguageType";
import { Message, SavedMessage, saveMessageResponse, } from "../types/MessagesType";
import { deleteAllSavedMessages, deleteSavedMessage, getAllSavedMessages, saveUnsaveMessage} from "../../api/messages/messages";

const initialState = {
  savedMessages: [],
  isLoading: false,
}

export interface SavedMessagesState {
  savedMessages: SavedMessage[],
  isLoading: boolean,
}

const state: SavedMessagesState = JSON.parse(JSON.stringify(initialState));

const getters = {
}

const mutations = {
  setLoading(state: SavedMessagesState,value:boolean) {
    state.isLoading = value;
  },
  setSavedMessages(state: SavedMessagesState, value: SavedMessage[]) {
    state.savedMessages = value;
    console.log(state.savedMessages);
  },
  deleteAllSavedMessages (state: SavedMessagesState) {
    state.savedMessages = [];
  },
  delSavedMessage(state: SavedMessagesState, messageId: number) {
    state.savedMessages = state.savedMessages.filter(elem => elem.id !== messageId);
  },
  addSavedMessage(state: SavedMessagesState, newMessage: SavedMessage) {
    state.savedMessages.unshift(newMessage);
  },
  correctTheChatId(state: SavedMessagesState, messageId: number) {
    state.savedMessages.forEach((elem) => {
      if (elem.chat_id === messageId) {
        elem.chat_id = null
      }
      return elem;
    })
    console.log(state)
  },
  reset(state: SavedMessagesState) {
    state = initialState;
  }
};

const actions = {
  async getSavedMessages ({commit}: any) {
    commit('setLoading',true);
    getAllSavedMessages()
      .then((data) => {
        console.log(data)
        commit('setSavedMessages', data);
      })
      .finally(() => {
        commit('setLoading', false);
      })
  },
  async deleteAllSavedMessages ({commit}: any) {
    commit('setLoading',true);
    deleteAllSavedMessages()
      .then(() => {
        commit('deleteAllSavedMessages');
      })
      .catch((error) => {
        console.log(error)
      }).finally(() => {
        commit('setLoading',false);
      })
  },
  async unsaveMessage ({commit}: any, payload: {chat_id: number,message: Message}) {
    commit('setLoading',true)
    store.commit('selectedChat/saveUnsaveSpesificMessage',{'messageId': payload.message.id, 'value': false})
    saveUnsaveMessage(payload.chat_id, payload.message.id,false)
      .then((response) => {
        console.log('response unsave',response)
        commit('delSavedMessage',payload.message.id)
      })
      .finally(() => commit('setLoading',false))
  },
  async saveMessage ({commit}: any, payload: {chat_id: number,message: Message}) {
    commit('setLoading',true);
    store.commit('selectedChat/saveUnsaveSpesificMessage',{'messageId': payload.message.id, 'value': true});

    saveUnsaveMessage(payload.chat_id, payload.message.id,true)
      .then((response) => {
        console.log(response)
        const obj = {
          'id': response[1].id,
          'user_request': response[0].content,
          'ai_response': response[1].content,
          "chat_id": response[1].chat_id,
          "user_message_id": response[0].id,
          "ai_response_id": response[1].id,
        };
        console.log(response)
        commit('addSavedMessage',obj);
      })
      .finally(() => commit('setLoading',false))
  },
  async delSavedMessage({commit}: any, messageId: number) {
    deleteSavedMessage(messageId)
      .then(() => {
        commit('delSavedMessage',messageId);
      })
  }
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

export const getSavedMessages = () => {
  store.dispatch('savedMessages/getSavedMessages')
}
export const removeAllSavedMessages = () => {
  store.dispatch('savedMessages/deleteAllSavedMessages')
}

export const removeSavedMessage = (chat_id: number,messsage_id: number) => {
  store.dispatch('savedMessages/unsaveMessage',{chat_id, messsage_id})
}

export const unsaveMessage = (chat_id: number,item: Message) => {
  store.dispatch('savedMessages/unsaveMessage',{chat_id,'message': item})
}

export const saveMessage = (chat_id: number,item: Message) => {
  store.dispatch('savedMessages/saveMessage',{chat_id,'message': item})
}

export const delSavedMessage = (messageId: number) => {
  store.dispatch('savedMessages/delSavedMessage',messageId)
}