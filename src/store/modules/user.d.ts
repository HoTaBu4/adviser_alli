import { Module } from "vuex";
import { RootState } from "../store";
import { UserState } from "../types/UserType";
declare const user: Module<UserState, RootState>;
export default user;
