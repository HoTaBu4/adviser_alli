import { createStore } from "vuex";
import user from "./modules/user";
import language from "./modules/language";
import chats from "./modules/chats";
const store = createStore({
    modules: {
        user,
        language,
        chats,
    },
});
export default store;
