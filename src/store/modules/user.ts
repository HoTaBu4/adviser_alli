import { Module } from "vuex";
import { RootState } from "../store";
import { UserState } from "../types/UserType";


const state: UserState = {
  user: {
    name: '',
    email: '',
    isGuest: true,
  },
};

const getters = {
  getUser: (state: UserState) => state.user,
};

const mutations = {
  setUser(state: UserState, user: Partial<UserState>) {
    state.user = { ...state.user, ...user };
  },
};

// Actions to commit mutations
const actions = {
  // Action to set or update the user object
  updateUser({ commit }: any, user: Partial<UserState>) {
    commit("setUser", user);
  },
};

// Exporting the module as a Vuex module
const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default user;
