const state = {
    messages: [],
};
const getters = {
    allMessages: (state) => state.messages,
};
const mutations = {
    addMessage(state, message) {
        state.messages.push(message);
    },
    clearMessages(state) {
        state.messages = [];
    },
};
const actions = {
    sendMessage({ commit }, message) {
        commit("addMessage", message);
    },
    clearChat({ commit }) {
        commit("clearMessages");
    },
};
const chats = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
export default chats;
