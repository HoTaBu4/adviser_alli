const state = {
    user: {
        name: '',
        email: '',
        isGuest: true,
    },
};
const getters = {
    getUser: (state) => state.user,
};
const mutations = {
    setUser(state, user) {
        state.user = { ...state.user, ...user };
    },
};
// Actions to commit mutations
const actions = {
    // Action to set or update the user object
    updateUser({ commit }, user) {
        commit("setUser", user);
    },
};
// Exporting the module as a Vuex module
const user = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
export default user;
