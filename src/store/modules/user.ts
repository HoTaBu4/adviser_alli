import { Module } from "vuex";
import store, { RootState } from "../store";
import { LoginUser, RegisterUser, UserState } from "../types/UserType";
import { loginUser, registerUser } from "../../api/user/user";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  id: number;
  sub: string;
}

const getDefaultState = (): UserState => ({
  user: {
    username: '',
    email: '',
    id: null,
    isGuest: true,
  },
  isloading: false,
});

const state: UserState = getDefaultState();

const getters = {
  getUser: (state: UserState) => state,
};

const mutations = {
  setUser(state: UserState, user: Partial<UserState>) {
    state.user = { ...state.user, ...user ,isGuest : false };
  },
  setLoading(state: UserState, isLoading: boolean) {
    state.isloading = isLoading;
  },
  reset(state:UserState) {
    Object.assign(state, getDefaultState());
  },
};

// Actions to commit mutations
const actions = {
  async registationUser({commit}: any, user: RegisterUser) {
    commit("setLoading", true); 
    registerUser(user)
      .then((response) => {
        commit("setLoading", false); 
      })
      .finally(() =>commit("setLoading", false));
  },
  async authorizationUser({ commit }: any, { user, router }) {
    commit("setLoading", false); 

    loginUser(user)
      .then((response) => {
        const data: CustomJwtPayload = jwtDecode(response.access_token);
        commit('setUser',{email: data.sub, id: data.id})
        router.push({ path: '/home' });
        document.cookie = `token=${response.access_token}; path=/; max-age=3600; SameSite=Strict; Secure`;
      })
      .catch((error) => console.log(error))
      .finally(() => commit('setLoading',false))
  }
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


export const registationUser = (data: RegisterUser) => {
  store.dispatch('user/registationUser', data) 
}

export const authorizationUser = (user: LoginUser, router: any) => {
  store.dispatch('user/authorizationUser', {user, router}) 
}