import { Languages } from "../../store/types/LanguageType";
export declare function useLanguage(): {
    language: import("vue").ComputedRef<any>;
    handleSetLanguage: (targetLanguage: Languages) => void;
};
