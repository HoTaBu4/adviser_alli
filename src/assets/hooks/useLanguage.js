import { computed } from "vue";
import { useStore } from "vuex";
export function useLanguage() {
    const store = useStore();
    const language = computed(() => store.getters["language/language"]);
    const handleSetLanguage = (targetLanguage) => {
        store.dispatch('language/updateLanguage', targetLanguage);
    };
    return { language, handleSetLanguage };
}
