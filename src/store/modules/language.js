import { Languages } from "../types/LanguageType";
const state = {
    currentLanguage: Languages.us,
};
const getters = {
    language: (state) => state.currentLanguage,
};
const mutations = {
    setLanguage(state, language) {
        state.currentLanguage = language;
    },
};
const actions = {
    updateLanguage({ commit }, language = Languages.us) {
        commit("setLanguage", language);
    },
};
const language = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
export default language;
