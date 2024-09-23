import { onMounted, onUnmounted, reactive } from 'vue';
import InputField from '../../CommonComponents/InputField/InputField.vue';
import { useLanguage } from '../../../assets/hooks/useLanguage';
import { Languages } from '../../../store/types/LanguageType';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const info = reactive({
    name: {
        text: '',
        error: '',
    },
    password: {
        text: '',
        error: '',
    }
});
// const modalRef = ref<VNodeRef | null>(null);
const emit = defineEmits(['close-modal']);
const { language, handleSetLanguage } = useLanguage();
const handleChangeLanguage = (targetLanguage) => {
    if (language.value !== targetLanguage) {
        handleSetLanguage(targetLanguage);
    }
};
const handleSubmit = (event) => {
    info.name.error = '';
    info.password.error = '';
    event.preventDefault();
    if (info.name.text.length < 4 || info.name.text.length > 15) {
        info.name.error = language.value === Languages.us
            ? '4 - 15 symbols'
            : '4 - 15 символів';
    }
    if (info.password.text.length < 4 || info.password.text.length > 15) {
        info.password.error = language.value === Languages.us
            ? '8 - 15 symbols'
            : '8 - 15 символів';
    }
};
const handleClose = () => {
    emit('close-modal');
};
const handleOutsideClick = (event) => {
    const target = event.target;
    if (target && target.classList && target.classList.contains("settings-modal")) {
        handleClose(); // Close the modal
    }
};
// Register the click event listener to detect clicks outside the modal
onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
});
onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleOutsideClick) }, ...{ class: ("settings-modal") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onClick: () => { } }, ...{ class: ("settings-modal__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__close") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ onClick: (__VLS_ctx.handleClose) }, src: ("/pictures/icons/mobile_close.svg"), alt: (""), ...{ class: ("settings-modal__close-img") }, });
    // @ts-ignore
    [handleOutsideClick, handleClose,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__name") }, });
    // @ts-ignore
    [InputField,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(InputField, new InputField({ modelValue: ((__VLS_ctx.info.name.text)), error: ((__VLS_ctx.info.name.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'name' : `ім&#39я`)), name: (('name')), isStatic: ((true)), labelText: ((__VLS_ctx.language === __VLS_ctx.language.us ? 'name' : `ім&#39я`)), }));
    const __VLS_1 = __VLS_0({ modelValue: ((__VLS_ctx.info.name.text)), error: ((__VLS_ctx.info.name.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'name' : `ім&#39я`)), name: (('name')), isStatic: ((true)), labelText: ((__VLS_ctx.language === __VLS_ctx.language.us ? 'name' : `ім&#39я`)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ modelValue: ((__VLS_ctx.info.name.text)), error: ((__VLS_ctx.info.name.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'name' : `ім&#39я`)), name: (('name')), isStatic: ((true)), labelText: ((__VLS_ctx.language === __VLS_ctx.language.us ? 'name' : `ім&#39я`)), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(InputField, __VLS_1));
    // @ts-ignore
    [info, info, language, language, language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__language") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__language-title") }, });
    (__VLS_ctx.language === __VLS_ctx.Languages.us ? 'language :' : 'мова :');
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__language-change") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleChangeLanguage(__VLS_ctx.Languages.us);
                // @ts-ignore
                [Languages, handleChangeLanguage,];
            } }, ...{ class: ("settings-modal__en") }, ...{ class: (({ 'settings-modal__en--selected': __VLS_ctx.language === __VLS_ctx.Languages.us })) }, });
    __VLS_styleScopedClasses = ({ 'settings-modal__en--selected': language === Languages.us });
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleChangeLanguage(__VLS_ctx.Languages.uk);
                // @ts-ignore
                [Languages, handleChangeLanguage,];
            } }, ...{ class: ("settings-modal__uk") }, ...{ class: (({ 'settings-modal__uk--selected': __VLS_ctx.language === __VLS_ctx.Languages.uk })) }, });
    __VLS_styleScopedClasses = ({ 'settings-modal__uk--selected': language === Languages.uk });
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__password") }, });
    // @ts-ignore
    [InputField,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(InputField, new InputField({ modelValue: ((__VLS_ctx.info.password.text)), error: ((__VLS_ctx.info.password.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'password' : `пароль`)), name: (('name')), isStatic: ((true)), labelText: ((__VLS_ctx.language === __VLS_ctx.language.us ? 'password' : `пароль`)), }));
    const __VLS_6 = __VLS_5({ modelValue: ((__VLS_ctx.info.password.text)), error: ((__VLS_ctx.info.password.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'password' : `пароль`)), name: (('name')), isStatic: ((true)), labelText: ((__VLS_ctx.language === __VLS_ctx.language.us ? 'password' : `пароль`)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ modelValue: ((__VLS_ctx.info.password.text)), error: ((__VLS_ctx.info.password.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'password' : `пароль`)), name: (('name')), isStatic: ((true)), labelText: ((__VLS_ctx.language === __VLS_ctx.language.us ? 'password' : `пароль`)), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(InputField, __VLS_6));
    // @ts-ignore
    [info, info, language, language, language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings-modal__buttons") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleSubmit) }, ...{ class: ("settings-modal__save") }, });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk ? 'SAVE' : 'ЗБЕРЕГТИ');
    // @ts-ignore
    [language, Languages, handleSubmit,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("settings-modal__log-out") }, });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk ? 'log out' : 'ВИЙТИ');
    // @ts-ignore
    [language, Languages,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settings-modal'];
        __VLS_styleScopedClasses['settings-modal__content'];
        __VLS_styleScopedClasses['settings-modal__close'];
        __VLS_styleScopedClasses['settings-modal__close-img'];
        __VLS_styleScopedClasses['settings-modal__title'];
        __VLS_styleScopedClasses['settings-modal__name'];
        __VLS_styleScopedClasses['settings-modal__language'];
        __VLS_styleScopedClasses['settings-modal__language-title'];
        __VLS_styleScopedClasses['settings-modal__language-change'];
        __VLS_styleScopedClasses['settings-modal__en'];
        __VLS_styleScopedClasses['settings-modal__uk'];
        __VLS_styleScopedClasses['settings-modal__password'];
        __VLS_styleScopedClasses['settings-modal__buttons'];
        __VLS_styleScopedClasses['settings-modal__save'];
        __VLS_styleScopedClasses['settings-modal__log-out'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                InputField: InputField,
                Languages: Languages,
                info: info,
                language: language,
                handleChangeLanguage: handleChangeLanguage,
                handleSubmit: handleSubmit,
                handleClose: handleClose,
                handleOutsideClick: handleOutsideClick,
            };
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
;
