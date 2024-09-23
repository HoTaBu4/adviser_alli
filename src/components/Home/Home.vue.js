import Burger from "./Burger/Burger.vue";
import Sidebar from "./SideBar/Sidebar.vue";
import SelectTheme from "./SelectTheme/SelectTheme.vue";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import SettingsModal from "./SettingsModal/SettingsModal.vue";
import { useStore } from "vuex";
import { AuthenticationTypes } from "../../assets/types/AuthenticationType";
import Chat from "./Chat/Chat.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isOpenSidebar = ref(false);
const isOpenModal = ref(false);
const windowWidth = ref(window.innerWidth);
const store = useStore();
const user = computed(() => store.state.user.user);
const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
};
// Define the resize handler function
const handleResize = () => {
    windowWidth.value = window.innerWidth;
};
onMounted(() => {
    //adding resize event
    window.addEventListener("resize", handleResize);
    console.log(user.value);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});
const closeModal = () => {
    isOpenModal.value = false;
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("home-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-header__container") }, });
    if (__VLS_ctx.windowWidth <= 900) {
        // @ts-ignore
        [Burger,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Burger, new Burger({ ...{ 'onToggleSidebar': {} }, isOpenSidebar: (__VLS_ctx.isOpenSidebar), }));
        const __VLS_1 = __VLS_0({ ...{ 'onToggleSidebar': {} }, isOpenSidebar: (__VLS_ctx.isOpenSidebar), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ ...{ 'onToggleSidebar': {} }, isOpenSidebar: (__VLS_ctx.isOpenSidebar), }));
        let __VLS_5;
        const __VLS_6 = {
            onToggleSidebar: (__VLS_ctx.toggleSidebar)
        };
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Burger, __VLS_1));
        let __VLS_2;
        let __VLS_3;
        // @ts-ignore
        [windowWidth, isOpenSidebar, toggleSidebar,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-header__icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/main__logo__tablet.png"), alt: (""), ...{ class: ("home-header__icon--tablet") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/main__logo_phone.png"), alt: (""), ...{ class: ("home-header__icon--phone") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-header__profile") }, });
    if (!__VLS_ctx.user.isGuest) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ onClick: (...[$event]) => {
                    if (!((!__VLS_ctx.user.isGuest)))
                        return;
                    __VLS_ctx.isOpenModal = true;
                    // @ts-ignore
                    [user, isOpenModal,];
                } }, viewBox: ("0 0 27 28"), xmlns: ("http://www.w3.org/2000/svg"), ...{ class: ("home-header__profile--img") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M13.6953 27.377C6.4082 27.377 0.447266 21.416 0.447266 14.1289C0.447266 6.8418 6.4082 0.880859 13.6953 0.880859C20.9824 0.880859 26.9434 6.8418 26.9434 14.1289C26.9434 21.416 20.9824 27.377 13.6953 27.377ZM13.6953 18.5586C18.4531 18.5586 21.9121 20.9512 22.8281 22.7695C24.9746 20.5137 26.2734 17.4648 26.2734 14.1289C26.2734 7.18359 20.6406 1.55078 13.6953 1.55078C6.76367 1.55078 1.11719 7.18359 1.11719 14.1289C1.11719 17.4512 2.41602 20.4863 4.53516 22.7422C5.50586 20.9238 8.96484 18.5586 13.6953 18.5586ZM13.6953 16.1797C11.0703 16.1797 9.08789 13.9512 9.08789 11.0527C9.06055 8.33203 11.125 6.02148 13.6953 6.02148C16.252 6.02148 18.2891 8.33203 18.2891 11.0527C18.2891 13.9512 16.3066 16.1797 13.6953 16.1797Z"), fill: ("#B1B0B4"), });
    }
    // @ts-ignore
    const __VLS_7 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.login } })), ...{ class: ("home-header__log-in") }, }));
    const __VLS_9 = __VLS_8({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.login } })), ...{ class: ("home-header__log-in") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.login } })), ...{ class: ("home-header__log-in") }, }));
    const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9));
    // @ts-ignore
    [AuthenticationTypes,];
    __VLS_nonNullable(__VLS_12.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("home") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home__wrapper") }, });
    // @ts-ignore
    const __VLS_13 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ name: ("settings_modal"), }));
    const __VLS_15 = __VLS_14({ name: ("settings_modal"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    ({}({ name: ("settings_modal"), }));
    const __VLS_18 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15));
    if (__VLS_ctx.isOpenModal) {
        // @ts-ignore
        [SettingsModal,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(SettingsModal, new SettingsModal({ ...{ 'onCloseModal': {} }, }));
        const __VLS_20 = __VLS_19({ ...{ 'onCloseModal': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ 'onCloseModal': {} }, }));
        let __VLS_24;
        const __VLS_25 = {
            onCloseModal: (__VLS_ctx.closeModal)
        };
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SettingsModal, __VLS_20));
        let __VLS_21;
        let __VLS_22;
        // @ts-ignore
        [isOpenModal, closeModal,];
    }
    __VLS_nonNullable(__VLS_18.slots).default;
    // @ts-ignore
    [Sidebar,];
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({ isOpenSidebar: (__VLS_ctx.isOpenSidebar), }));
    const __VLS_27 = __VLS_26({ isOpenSidebar: (__VLS_ctx.isOpenSidebar), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    ({}({ isOpenSidebar: (__VLS_ctx.isOpenSidebar), }));
    const __VLS_30 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Sidebar, __VLS_27));
    // @ts-ignore
    [isOpenSidebar,];
    if (false) {
        // @ts-ignore
        [SelectTheme,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(SelectTheme, new SelectTheme({}));
        const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({}));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SelectTheme, __VLS_32));
    }
    // @ts-ignore
    [Chat,];
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(Chat, new Chat({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    ({}({}));
    const __VLS_40 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Chat, __VLS_37));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['home__container'];
        __VLS_styleScopedClasses['home-header'];
        __VLS_styleScopedClasses['home-header__container'];
        __VLS_styleScopedClasses['home-header__icon'];
        __VLS_styleScopedClasses['home-header__icon--tablet'];
        __VLS_styleScopedClasses['home-header__icon--phone'];
        __VLS_styleScopedClasses['home-header__profile'];
        __VLS_styleScopedClasses['home-header__profile--img'];
        __VLS_styleScopedClasses['home-header__log-in'];
        __VLS_styleScopedClasses['home'];
        __VLS_styleScopedClasses['home__wrapper'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Burger: Burger,
                Sidebar: Sidebar,
                SelectTheme: SelectTheme,
                SettingsModal: SettingsModal,
                AuthenticationTypes: AuthenticationTypes,
                Chat: Chat,
                isOpenSidebar: isOpenSidebar,
                isOpenModal: isOpenModal,
                windowWidth: windowWidth,
                user: user,
                toggleSidebar: toggleSidebar,
                closeModal: closeModal,
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
