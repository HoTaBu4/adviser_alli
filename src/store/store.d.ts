import { UserState } from "./types/UserType";
import { LanguageState } from "./types/LanguageType";
import { ChatState } from "./types/ChatType";
export interface RootState {
    user: UserState;
    language: LanguageState;
    chats: ChatState;
}
declare const store: import("vuex").Store<RootState>;
export default store;
