import { Module } from "vuex";
import { RootState } from "../store";
import { UserState } from "../types/UserType";

const state: UserState = {
  name: "",
  email: "",
};

const getters = {
  userName: (state: UserState) => state.name,
  userEmail: (state: UserState) => state.email,
};

const mutations = {
  setName(state: UserState, name: string) {
    state.name = name;
  },
  setEmail(state: UserState, email: string) {
    state.email = email;
  },
};

const actions = {
  updateUserName({ commit }: any, name: string) {
    commit("setName", name);
  },
  updateUserEmail({ commit }: any, email: string) {
    commit("setEmail", email);
  },
};

const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default user;
