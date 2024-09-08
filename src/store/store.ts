import { createStore } from "vuex";
import user from "./modules/user";
import language from "./modules/language";
import chats from "./modules/chats";
import { UserState } from "./types/UserType";
import { LanguageState } from "./types/LanguageType";
import { ChatState } from "./types/ChatType";

export interface RootState {
  user: UserState;
  language: LanguageState;
  chats: ChatState;
}

const store = createStore<RootState>({
  modules: {
    user,
    language,
    chats,
  },
});

export default store;
