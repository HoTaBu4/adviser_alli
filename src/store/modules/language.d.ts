import { Module } from "vuex";
import { RootState } from "../store";
import { LanguageState } from "../types/LanguageType";
declare const language: Module<LanguageState, RootState>;
export default language;
