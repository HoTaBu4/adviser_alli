import { computed, ref } from "vue";
import { useLanguage } from "../../../assets/hooks/useLanguage";
import { Languages } from "../../../store/types/LanguageType";
import { useStore } from "vuex";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    isOpenSidebar: {
        type: Boolean,
        required: true,
    },
});
const isOpenSaved = ref(false);
const isOpenRequest = ref(false);
const { language } = useLanguage();
const store = useStore();
const user = computed(() => store.state.user);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isOpenSidebar: {
            type: Boolean,
            required: true,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({ ...{ class: ("aside") }, ...{ class: (({ open: __VLS_ctx.isOpenSidebar })) }, });
    __VLS_styleScopedClasses = ({ open: isOpenSidebar });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__request") }, ...{ class: (({
                'full-height': __VLS_ctx.isOpenRequest && !__VLS_ctx.isOpenSaved,
                'half-height': __VLS_ctx.isOpenRequest && __VLS_ctx.isOpenSaved,
                closed: !__VLS_ctx.isOpenRequest,
            })) }, });
    __VLS_styleScopedClasses = ({
        'full-height': isOpenRequest && !isOpenSaved,
        'half-height': isOpenRequest && isOpenSaved,
        closed: !isOpenRequest,
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.isOpenRequest = !__VLS_ctx.isOpenRequest;
                // @ts-ignore
                [isOpenSidebar, isOpenRequest, isOpenRequest, isOpenRequest, isOpenRequest, isOpenRequest, isOpenSaved, isOpenSaved,];
            } }, ...{ class: ("aside__controller") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__title") }, });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "останні запити" : "recent request:");
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/arrow.svg"), alt: (""), ...{ class: ("aside__arrow") }, ...{ class: (({ 'aside__arrow--isOpen': __VLS_ctx.isOpenRequest })) }, });
    __VLS_styleScopedClasses = ({ 'aside__arrow--isOpen': isOpenRequest });
    // @ts-ignore
    [isOpenRequest,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__container") }, });
    if (__VLS_ctx.user.user.isGuest) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__red-notice") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk
            ? `Bи не можете отримати доступ до історії пошуку чи збережених рекомендацій, якщо ви увійшли як гість.`
            : `You can&#39;t access your search history or saved recommendations since you logged in as a guest.`);
        // @ts-ignore
        [language, Languages, user,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__saved") }, ...{ class: (({
                'full-height': __VLS_ctx.isOpenSaved && !__VLS_ctx.isOpenRequest,
                'half-height': __VLS_ctx.isOpenSaved && __VLS_ctx.isOpenRequest,
                closed: !__VLS_ctx.isOpenSaved,
            })) }, });
    __VLS_styleScopedClasses = ({
        'full-height': isOpenSaved && !isOpenRequest,
        'half-height': isOpenSaved && isOpenRequest,
        closed: !isOpenSaved,
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.isOpenSaved = !__VLS_ctx.isOpenSaved;
                // @ts-ignore
                [isOpenRequest, isOpenRequest, isOpenSaved, isOpenSaved, isOpenSaved, isOpenSaved, isOpenSaved,];
            } }, ...{ class: ("aside__controller") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__title") }, });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "збережені:" : `saved:`);
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/arrow.svg"), alt: (""), ...{ class: ("aside__arrow") }, ...{ class: (({ 'aside__arrow--isOpen': __VLS_ctx.isOpenSaved })) }, });
    __VLS_styleScopedClasses = ({ 'aside__arrow--isOpen': isOpenSaved });
    // @ts-ignore
    [isOpenSaved,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__container") }, });
    if (__VLS_ctx.user.user.isGuest) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside__red-notice") }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.uk
            ? `Bи не можете отримати доступ до історії пошуку чи збережених рекомендацій, якщо ви увійшли як гість.`
            : `You can&#39;t access your search history or saved recommendations since you logged in as a guest.`);
        // @ts-ignore
        [language, Languages, user,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['aside'];
        __VLS_styleScopedClasses['aside__wrapper'];
        __VLS_styleScopedClasses['aside__request'];
        __VLS_styleScopedClasses['aside__controller'];
        __VLS_styleScopedClasses['aside__title'];
        __VLS_styleScopedClasses['aside__arrow'];
        __VLS_styleScopedClasses['aside__container'];
        __VLS_styleScopedClasses['aside__red-notice'];
        __VLS_styleScopedClasses['aside__saved'];
        __VLS_styleScopedClasses['aside__controller'];
        __VLS_styleScopedClasses['aside__title'];
        __VLS_styleScopedClasses['aside__arrow'];
        __VLS_styleScopedClasses['aside__container'];
        __VLS_styleScopedClasses['aside__red-notice'];
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
                isOpenSaved: isOpenSaved,
                isOpenRequest: isOpenRequest,
                language: language,
                user: user,
            };
        },
        props: {
            isOpenSidebar: {
                type: Boolean,
                required: true,
            },
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        isOpenSidebar: {
            type: Boolean,
            required: true,
        },
    },
});
;
