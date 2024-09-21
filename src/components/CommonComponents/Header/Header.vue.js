import { ref } from "vue";
import { Languages } from "../../../store/types/LanguageType";
import { useLanguage } from "../../../assets/hooks/useLanguage";
import Burger from "../Burger/Burger.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    home: {
        type: Boolean,
    },
});
const user = ref(false);
const { language } = useLanguage();
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        home: {
            type: Boolean,
        },
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("header container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/main__logo_phone.png"), alt: ("logo"), ...{ class: ("header__icon--phone") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/main__logo__tablet.png"), alt: ("logo"), ...{ class: ("header__icon--tablet") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__icon-text") }, });
    if (!__VLS_ctx.home) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__info--text") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "FRESH" : "СВІЖИЙ");
        // @ts-ignore
        [home, language, Languages,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__info--line") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__info--text") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "CONVINIENT" : "ЗРУЧНИЙ");
        // @ts-ignore
        [language, Languages,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__info--line") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__info--text") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "FAST" : "ШВИДКИЙ");
        // @ts-ignore
        [language, Languages,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header__right-side") }, });
    if (__VLS_ctx.user) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("header__log-in") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? 'log in' : 'зареєстуватися');
        // @ts-ignore
        [language, Languages, user,];
    }
    if (__VLS_ctx.user) {
        // @ts-ignore
        [Burger,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Burger, new Burger({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({}));
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Burger, __VLS_1));
        // @ts-ignore
        [user,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['header__icon'];
        __VLS_styleScopedClasses['header__icon--phone'];
        __VLS_styleScopedClasses['header__icon--tablet'];
        __VLS_styleScopedClasses['header__icon-text'];
        __VLS_styleScopedClasses['header__info'];
        __VLS_styleScopedClasses['header__info--text'];
        __VLS_styleScopedClasses['header__info--line'];
        __VLS_styleScopedClasses['header__info--text'];
        __VLS_styleScopedClasses['header__info--line'];
        __VLS_styleScopedClasses['header__info--text'];
        __VLS_styleScopedClasses['header__right-side'];
        __VLS_styleScopedClasses['header__log-in'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Languages: Languages,
                Burger: Burger,
                user: user,
                language: language,
            };
        },
        props: {
            home: {
                type: Boolean,
            },
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        home: {
            type: Boolean,
        },
    },
});
;
