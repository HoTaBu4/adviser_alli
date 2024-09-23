import { ref } from "vue";
import { Languages } from "../../../store/types/LanguageType";
import { useLanguage } from "../../../assets/hooks/useLanguage";
import { AuthenticationTypes } from "../../../assets/types/AuthenticationType";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const start = ref(false);
const openModal = ref(false);
const { language } = useLanguage();
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    if (!__VLS_ctx.start) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main__info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main__text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("main__text--h1") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "An all-powerful" : "Всесильний");
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        // @ts-ignore
        [start, language, Languages,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("main__text--span") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "personal AI" : "особистий ШІ");
        // @ts-ignore
        [language, Languages,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "assistant right on" : "помічник прямо з");
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        // @ts-ignore
        [language, Languages,];
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "your phone" : "вашого телефону");
        // @ts-ignore
        [language, Languages,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main__text--h2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((!__VLS_ctx.start)))
                        return;
                    __VLS_ctx.start = true;
                    // @ts-ignore
                    [start,];
                } }, ...{ class: ("main__button") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "start now" : "почати зараз");
        // @ts-ignore
        [language, Languages,];
    }
    if (__VLS_ctx.start) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons-container") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .transition;
        ({}.transition);
        ({}.transition);
        __VLS_components.Transition;
        __VLS_components.transition;
        __VLS_components.Transition;
        __VLS_components.transition;
        // @ts-ignore
        [Transition, Transition,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("modal_info"), }));
        const __VLS_2 = __VLS_1({ name: ("modal_info"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ name: ("modal_info"), }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        if (__VLS_ctx.openModal) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons-container__modal") }, });
            (__VLS_ctx.language === __VLS_ctx.Languages.uk
                ? "If you choose to log in as a guest, you won&#39;t have access to your search history or saved recommendations."
                : "Якщо ви вирішите увійти як гість, ви не матимете доступу до свого пошуку історія або збережені рекомендації.");
            // @ts-ignore
            [start, language, Languages, openModal,];
        }
        __VLS_nonNullable(__VLS_5.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("buttons-container__title") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "start" : "почати ");
        // @ts-ignore
        [language, Languages,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons-container__buttons") }, });
        // @ts-ignore
        const __VLS_6 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.login } })), ...{ class: ("buttons-container__log-in") }, }));
        const __VLS_8 = __VLS_7({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.login } })), ...{ class: ("buttons-container__log-in") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.login } })), ...{ class: ("buttons-container__log-in") }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "log in" : "ввійти");
        // @ts-ignore
        [language, Languages, AuthenticationTypes,];
        __VLS_nonNullable(__VLS_11.slots).default;
        // @ts-ignore
        const __VLS_12 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.register } })), ...{ class: ("buttons-container__register") }, }));
        const __VLS_14 = __VLS_13({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.register } })), ...{ class: ("buttons-container__register") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.register } })), ...{ class: ("buttons-container__register") }, }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "register" : "зареєструватися");
        // @ts-ignore
        [language, Languages, AuthenticationTypes,];
        __VLS_nonNullable(__VLS_17.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttons-container__guest") }, });
        // @ts-ignore
        const __VLS_18 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("home"), ...{ class: ("buttons-container__log-as-guest") }, }));
        const __VLS_20 = __VLS_19({ to: ("home"), ...{ class: ("buttons-container__log-as-guest") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ to: ("home"), ...{ class: ("buttons-container__log-as-guest") }, }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        (__VLS_ctx.language === __VLS_ctx.Languages.uk
            ? "log as a guest"
            : "зайти як гість");
        // @ts-ignore
        [language, Languages,];
        __VLS_nonNullable(__VLS_23.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.start)))
                        return;
                    __VLS_ctx.openModal = !__VLS_ctx.openModal;
                    // @ts-ignore
                    [openModal, openModal,];
                } }, width: ("38"), height: ("38"), viewBox: ("0 0 38 38"), xmlns: ("http://www.w3.org/2000/svg"), ...{ class: ("buttons-container__log-as-guest--svg buttons-container__log-as-guest--sign") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("\u004d\u0031\u0038\u002e\u0039\u0032\u0036\u0020\u0031\u0034\u002e\u0030\u0033\u0038\u0039\u0043\u0031\u0039\u002e\u0037\u0034\u0032\u0032\u0020\u0031\u0034\u002e\u0030\u0033\u0038\u0039\u0020\u0032\u0030\u002e\u0034\u0030\u0033\u0038\u0020\u0031\u0033\u002e\u0033\u0037\u0037\u0033\u0020\u0032\u0030\u002e\u0034\u0030\u0033\u0038\u0020\u0031\u0032\u002e\u0035\u0036\u0031\u0032\u0043\u0032\u0030\u002e\u0034\u0030\u0033\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0031\u002e\u0037\u0034\u0035\u0020\u0031\u0039\u002e\u0037\u0034\u0032\u0032\u0020\u0031\u0031\u002e\u0030\u0038\u0033\u0034\u0020\u0031\u0038\u002e\u0039\u0032\u0036\u0020\u0031\u0031\u002e\u0030\u0038\u0033\u0034\u0043\u0031\u0038\u002e\u0031\u0030\u0039\u0039\u0020\u0031\u0031\u002e\u0030\u0038\u0033\u0034\u0020\u0031\u0037\u002e\u0034\u0034\u0038\u0032\u0020\u0031\u0031\u002e\u0037\u0034\u0035\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0037\u002e\u0034\u0034\u0038\u0032\u0020\u0031\u0032\u002e\u0035\u0036\u0031\u0032\u0043\u0031\u0037\u002e\u0034\u0034\u0038\u0032\u0020\u0031\u0033\u002e\u0033\u0037\u0037\u0033\u0020\u0031\u0038\u002e\u0031\u0030\u0039\u0039\u0020\u0031\u0034\u002e\u0030\u0033\u0038\u0039\u0020\u0031\u0038\u002e\u0039\u0032\u0036\u0020\u0031\u0034\u002e\u0030\u0033\u0038\u0039\u005a"), ...{ class: ("buttons-container__log-as-guest--sign") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("\u004d\u0032\u0032\u002e\u0031\u0036\u0036\u0037\u0020\u0032\u0034\u002e\u0032\u0037\u0037\u0038\u0048\u0032\u0030\u002e\u0030\u0035\u0035\u0036\u0056\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u0048\u0031\u0036\u002e\u0038\u0038\u0038\u0039\u0043\u0031\u0036\u002e\u0036\u0030\u0039\u0020\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u0020\u0031\u0036\u002e\u0033\u0034\u0030\u0035\u0020\u0031\u0035\u002e\u0039\u0034\u0034\u0036\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0036\u002e\u0031\u0034\u0032\u0036\u0020\u0031\u0036\u002e\u0031\u0034\u0032\u0035\u0043\u0031\u0035\u002e\u0039\u0034\u0034\u0036\u0020\u0031\u0036\u002e\u0033\u0034\u0030\u0035\u0020\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u0020\u0031\u0036\u002e\u0036\u0030\u0039\u0020\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u0020\u0031\u0036\u002e\u0038\u0038\u0038\u0039\u0043\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0037\u002e\u0031\u0036\u0038\u0039\u0020\u0031\u0035\u002e\u0039\u0034\u0034\u0036\u0020\u0031\u0037\u002e\u0034\u0033\u0037\u0034\u0020\u0031\u0036\u002e\u0031\u0034\u0032\u0036\u0020\u0031\u0037\u002e\u0036\u0033\u0035\u0033\u0043\u0031\u0036\u002e\u0033\u0034\u0030\u0035\u0020\u0031\u0037\u002e\u0038\u0033\u0033\u0033\u0020\u0031\u0036\u002e\u0036\u0030\u0039\u0020\u0031\u0037\u002e\u0039\u0034\u0034\u0035\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0036\u002e\u0038\u0038\u0038\u0039\u0020\u0031\u0037\u002e\u0039\u0034\u0034\u0035\u0048\u0031\u0037\u002e\u0039\u0034\u0034\u0035\u0056\u0032\u0034\u002e\u0032\u0037\u0037\u0038\u0048\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u0043\u0031\u0035\u002e\u0035\u0035\u0033\u0034\u0020\u0032\u0034\u002e\u0032\u0037\u0037\u0038\u0020\u0031\u0035\u002e\u0032\u0038\u0035\u0020\u0032\u0034\u002e\u0033\u0038\u0039\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0035\u002e\u0030\u0038\u0037\u0020\u0032\u0034\u002e\u0035\u0038\u0037\u0043\u0031\u0034\u002e\u0038\u0038\u0039\u0020\u0032\u0034\u002e\u0037\u0038\u0034\u0039\u0020\u0031\u0034\u002e\u0037\u0037\u0037\u0038\u0020\u0032\u0035\u002e\u0030\u0035\u0033\u0034\u0020\u0031\u0034\u002e\u0037\u0037\u0037\u0038\u0020\u0032\u0035\u002e\u0033\u0033\u0033\u0034\u0043\u0031\u0034\u002e\u0037\u0037\u0037\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0035\u002e\u0036\u0031\u0033\u0033\u0020\u0031\u0034\u002e\u0038\u0038\u0039\u0020\u0032\u0035\u002e\u0038\u0038\u0031\u0038\u0020\u0031\u0035\u002e\u0030\u0038\u0037\u0020\u0032\u0036\u002e\u0030\u0037\u0039\u0038\u0043\u0031\u0035\u002e\u0032\u0038\u0035\u0020\u0032\u0036\u002e\u0032\u0037\u0037\u0037\u0020\u0031\u0035\u002e\u0035\u0035\u0033\u0034\u0020\u0032\u0036\u002e\u0033\u0038\u0038\u0039\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0035\u002e\u0038\u0033\u0033\u0034\u0020\u0032\u0036\u002e\u0033\u0038\u0038\u0039\u0048\u0032\u0032\u002e\u0031\u0036\u0036\u0037\u0043\u0032\u0032\u002e\u0034\u0034\u0036\u0037\u0020\u0032\u0036\u002e\u0033\u0038\u0038\u0039\u0020\u0032\u0032\u002e\u0037\u0031\u0035\u0032\u0020\u0032\u0036\u002e\u0032\u0037\u0037\u0037\u0020\u0032\u0032\u002e\u0039\u0031\u0033\u0031\u0020\u0032\u0036\u002e\u0030\u0037\u0039\u0038\u0043\u0032\u0033\u002e\u0031\u0031\u0031\u0031\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0035\u002e\u0038\u0038\u0031\u0038\u0020\u0032\u0033\u002e\u0032\u0032\u0032\u0033\u0020\u0032\u0035\u002e\u0036\u0031\u0033\u0033\u0020\u0032\u0033\u002e\u0032\u0032\u0032\u0033\u0020\u0032\u0035\u002e\u0033\u0033\u0033\u0034\u0043\u0032\u0033\u002e\u0032\u0032\u0032\u0033\u0020\u0032\u0035\u002e\u0030\u0035\u0033\u0034\u0020\u0032\u0033\u002e\u0031\u0031\u0031\u0031\u0020\u0032\u0034\u002e\u0037\u0038\u0034\u0039\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0032\u002e\u0039\u0031\u0033\u0031\u0020\u0032\u0034\u002e\u0035\u0038\u0037\u0043\u0032\u0032\u002e\u0037\u0031\u0035\u0032\u0020\u0032\u0034\u002e\u0033\u0038\u0039\u0020\u0032\u0032\u002e\u0034\u0034\u0036\u0037\u0020\u0032\u0034\u002e\u0032\u0037\u0037\u0038\u0020\u0032\u0032\u002e\u0031\u0036\u0036\u0037\u0020\u0032\u0034\u002e\u0032\u0037\u0037\u0038\u005a"), ...{ class: ("buttons-container__log-as-guest--sign") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("\u004d\u0031\u0038\u002e\u0039\u0039\u0039\u0039\u0020\u0036\u002e\u0033\u0033\u0033\u0033\u0037\u0043\u0031\u0036\u002e\u0034\u0039\u0034\u0037\u0020\u0036\u002e\u0033\u0033\u0033\u0033\u0037\u0020\u0031\u0034\u002e\u0030\u0034\u0035\u0037\u0020\u0037\u002e\u0030\u0037\u0036\u0032\u0036\u0020\u0031\u0031\u002e\u0039\u0036\u0032\u0037\u0020\u0038\u002e\u0034\u0036\u0038\u0030\u0039\u0043\u0039\u002e\u0038\u0037\u0039\u0036\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0039\u002e\u0038\u0035\u0039\u0039\u0032\u0020\u0038\u002e\u0032\u0035\u0036\u0031\u0036\u0020\u0031\u0031\u002e\u0038\u0033\u0038\u0032\u0020\u0037\u002e\u0032\u0039\u0037\u0034\u0035\u0020\u0031\u0034\u002e\u0031\u0035\u0032\u0037\u0043\u0036\u002e\u0033\u0033\u0038\u0037\u0034\u0020\u0031\u0036\u002e\u0034\u0036\u0037\u0032\u0020\u0036\u002e\u0030\u0038\u0037\u0039\u0020\u0031\u0039\u002e\u0030\u0031\u0034\u0031\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0036\u002e\u0035\u0037\u0036\u0036\u0034\u0020\u0032\u0031\u002e\u0034\u0037\u0031\u0032\u0043\u0037\u002e\u0030\u0036\u0035\u0033\u0039\u0020\u0032\u0033\u002e\u0039\u0032\u0038\u0033\u0020\u0038\u002e\u0032\u0037\u0031\u0037\u0037\u0020\u0032\u0036\u002e\u0031\u0038\u0035\u0033\u0020\u0031\u0030\u002e\u0030\u0034\u0033\u0032\u0020\u0032\u0037\u002e\u0039\u0035\u0036\u0037\u0043\u0031\u0031\u002e\u0038\u0031\u0034\u0037\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0039\u002e\u0037\u0032\u0038\u0032\u0020\u0031\u0034\u002e\u0030\u0037\u0031\u0037\u0020\u0033\u0030\u002e\u0039\u0033\u0034\u0036\u0020\u0031\u0036\u002e\u0035\u0032\u0038\u0038\u0020\u0033\u0031\u002e\u0034\u0032\u0033\u0033\u0043\u0031\u0038\u002e\u0039\u0038\u0035\u0039\u0020\u0033\u0031\u002e\u0039\u0031\u0032\u0031\u0020\u0032\u0031\u002e\u0035\u0033\u0032\u0037\u0020\u0033\u0031\u002e\u0036\u0036\u0031\u0032\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0033\u002e\u0038\u0034\u0037\u0032\u0020\u0033\u0030\u002e\u0037\u0030\u0032\u0035\u0043\u0032\u0036\u002e\u0031\u0036\u0031\u0038\u0020\u0032\u0039\u002e\u0037\u0034\u0033\u0038\u0020\u0032\u0038\u002e\u0031\u0034\u0020\u0032\u0038\u002e\u0031\u0032\u0030\u0033\u0020\u0032\u0039\u002e\u0035\u0033\u0031\u0039\u0020\u0032\u0036\u002e\u0030\u0033\u0037\u0033\u0043\u0033\u0030\u002e\u0039\u0032\u0033\u0037\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0033\u002e\u0039\u0035\u0034\u0032\u0020\u0033\u0031\u002e\u0036\u0036\u0036\u0036\u0020\u0032\u0031\u002e\u0035\u0030\u0035\u0033\u0020\u0033\u0031\u002e\u0036\u0036\u0036\u0036\u0020\u0031\u0039\u0043\u0033\u0031\u002e\u0036\u0036\u0036\u0036\u0020\u0031\u0035\u002e\u0036\u0034\u0030\u0036\u0020\u0033\u0030\u002e\u0033\u0033\u0032\u0031\u0020\u0031\u0032\u002e\u0034\u0031\u0038\u0038\u0020\u0032\u0037\u002e\u0039\u0035\u0036\u0036\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0030\u002e\u0030\u0034\u0033\u0034\u0043\u0032\u0035\u002e\u0035\u0038\u0031\u0031\u0020\u0037\u002e\u0036\u0036\u0037\u0038\u0039\u0020\u0032\u0032\u002e\u0033\u0035\u0039\u0033\u0020\u0036\u002e\u0033\u0033\u0033\u0033\u0037\u0020\u0031\u0038\u002e\u0039\u0039\u0039\u0039\u0020\u0036\u002e\u0033\u0033\u0033\u0033\u0037\u005a\u004d\u0031\u0038\u002e\u0039\u0039\u0039\u0039\u0020\u0032\u0039\u002e\u0035\u0035\u0035\u0036\u0043\u0031\u0036\u002e\u0039\u0031\u0032\u0032\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0039\u002e\u0035\u0035\u0035\u0036\u0020\u0031\u0034\u002e\u0038\u0037\u0031\u0034\u0020\u0032\u0038\u002e\u0039\u0033\u0036\u0035\u0020\u0031\u0033\u002e\u0031\u0033\u0035\u0036\u0020\u0032\u0037\u002e\u0037\u0037\u0036\u0037\u0043\u0031\u0031\u002e\u0033\u0039\u0039\u0037\u0020\u0032\u0036\u002e\u0036\u0031\u0036\u0038\u0020\u0031\u0030\u002e\u0030\u0034\u0036\u0038\u0020\u0032\u0034\u002e\u0039\u0036\u0038\u0033\u0020\u0039\u002e\u0032\u0034\u0037\u0038\u0036\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0033\u002e\u0030\u0033\u0039\u0035\u0043\u0038\u002e\u0034\u0034\u0038\u0039\u0034\u0020\u0032\u0031\u002e\u0031\u0031\u0030\u0037\u0020\u0038\u002e\u0032\u0033\u0039\u0039\u0020\u0031\u0038\u002e\u0039\u0038\u0038\u0033\u0020\u0038\u002e\u0036\u0034\u0037\u0031\u0039\u0020\u0031\u0036\u002e\u0039\u0034\u0030\u0038\u0043\u0039\u002e\u0030\u0035\u0034\u0034\u0038\u0020\u0031\u0034\u002e\u0038\u0039\u0033\u0032\u0020\u0031\u0030\u002e\u0030\u0035\u0039\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0033\u002e\u0030\u0031\u0032\u0034\u0020\u0031\u0031\u002e\u0035\u0033\u0036\u0020\u0031\u0031\u002e\u0035\u0033\u0036\u0031\u0043\u0031\u0033\u002e\u0030\u0031\u0032\u0032\u0020\u0031\u0030\u002e\u0030\u0035\u0039\u0039\u0020\u0031\u0034\u002e\u0038\u0039\u0033\u0031\u0020\u0039\u002e\u0030\u0035\u0034\u0036\u0020\u0031\u0036\u002e\u0039\u0034\u0030\u0036\u0020\u0038\u002e\u0036\u0034\u0037\u0033\u0031\u0043\u0031\u0038\u002e\u0039\u0038\u0038\u0032\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0038\u002e\u0032\u0034\u0030\u0030\u0032\u0020\u0032\u0031\u002e\u0031\u0031\u0030\u0036\u0020\u0038\u002e\u0034\u0034\u0039\u0030\u0035\u0020\u0032\u0033\u002e\u0030\u0033\u0039\u0034\u0020\u0039\u002e\u0032\u0034\u0037\u0039\u0038\u0043\u0032\u0034\u002e\u0039\u0036\u0038\u0031\u0020\u0031\u0030\u002e\u0030\u0034\u0036\u0039\u0020\u0032\u0036\u002e\u0036\u0031\u0036\u0037\u0020\u0031\u0031\u002e\u0033\u0039\u0039\u0038\u0020\u0032\u0037\u002e\u0037\u0037\u0036\u0035\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0033\u002e\u0031\u0033\u0035\u0037\u0043\u0032\u0038\u002e\u0039\u0033\u0036\u0034\u0020\u0031\u0034\u002e\u0038\u0037\u0031\u0035\u0020\u0032\u0039\u002e\u0035\u0035\u0035\u0035\u0020\u0031\u0036\u002e\u0039\u0031\u0032\u0033\u0020\u0032\u0039\u002e\u0035\u0035\u0035\u0035\u0020\u0031\u0039\u0043\u0032\u0039\u002e\u0035\u0035\u0035\u0035\u0020\u0032\u0030\u002e\u0033\u0038\u0036\u0032\u0020\u0032\u0039\u002e\u0032\u0038\u0032\u0035\u0020\u0032\u0031\u002e\u0037\u0035\u0038\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0038\u002e\u0037\u0035\u0032\u0020\u0032\u0033\u002e\u0030\u0033\u0039\u0035\u0043\u0032\u0038\u002e\u0032\u0032\u0031\u0035\u0020\u0032\u0034\u002e\u0033\u0032\u0030\u0031\u0020\u0032\u0037\u002e\u0034\u0034\u0034\u0020\u0032\u0035\u002e\u0034\u0038\u0033\u0038\u0020\u0032\u0036\u002e\u0034\u0036\u0033\u0038\u0020\u0032\u0036\u002e\u0034\u0036\u0033\u0039\u0043\u0032\u0035\u002e\u0034\u0038\u0033\u0037\u0020\u0032\u0037\u002e\u0034\u0034\u0034\u0031\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0034\u002e\u0033\u0032\u0020\u0032\u0038\u002e\u0032\u0032\u0031\u0036\u0020\u0032\u0033\u002e\u0030\u0033\u0039\u0034\u0020\u0032\u0038\u002e\u0037\u0035\u0032\u0031\u0043\u0032\u0031\u002e\u0037\u0035\u0038\u0037\u0020\u0032\u0039\u002e\u0032\u0038\u0032\u0036\u0020\u0032\u0030\u002e\u0033\u0038\u0036\u0031\u0020\u0032\u0039\u002e\u0035\u0035\u0035\u0036\u0020\u0031\u0038\u002e\u0039\u0039\u0039\u0039\u0020\u0032\u0039\u002e\u0035\u0035\u0035\u0036\u005a"), ...{ class: ("buttons-container__log-as-guest--sign") }, });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['main__info'];
        __VLS_styleScopedClasses['main__text'];
        __VLS_styleScopedClasses['main__text--h1'];
        __VLS_styleScopedClasses['main__text--span'];
        __VLS_styleScopedClasses['main__text--h2'];
        __VLS_styleScopedClasses['main__button'];
        __VLS_styleScopedClasses['buttons-container'];
        __VLS_styleScopedClasses['buttons-container__modal'];
        __VLS_styleScopedClasses['buttons-container__title'];
        __VLS_styleScopedClasses['buttons-container__buttons'];
        __VLS_styleScopedClasses['buttons-container__log-in'];
        __VLS_styleScopedClasses['buttons-container__register'];
        __VLS_styleScopedClasses['buttons-container__guest'];
        __VLS_styleScopedClasses['buttons-container__log-as-guest'];
        __VLS_styleScopedClasses['buttons-container__log-as-guest--svg'];
        __VLS_styleScopedClasses['buttons-container__log-as-guest--sign'];
        __VLS_styleScopedClasses['buttons-container__log-as-guest--sign'];
        __VLS_styleScopedClasses['buttons-container__log-as-guest--sign'];
        __VLS_styleScopedClasses['buttons-container__log-as-guest--sign'];
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
                AuthenticationTypes: AuthenticationTypes,
                start: start,
                openModal: openModal,
                language: language,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
