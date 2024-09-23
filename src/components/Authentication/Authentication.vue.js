import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLanguage } from "../../assets/hooks/useLanguage";
import { Languages } from "../../store/types/LanguageType";
import InputField from "../CommonComponents/InputField/InputField.vue";
import { FieldsTypes } from "../../assets/types/fieldTypes";
// import { loginUser, registerUser } from "../../api/user/user";
import { AuthenticationTypes } from "../../assets/types/AuthenticationType";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const data = reactive({
    email: {
        text: "",
        error: "",
        valid: false,
    },
    password: {
        text: "",
        error: "",
        valid: false,
    },
    username: {
        text: "",
        error: "",
        valid: false,
    }
});
const router = useRouter();
const route = useRoute();
const { language } = useLanguage();
const isLogin = ref(false);
const currentField = ref(FieldsTypes.email);
const lastField = ref(FieldsTypes.email);
const fieldOrder = [FieldsTypes.email, FieldsTypes.password, FieldsTypes.username];
if (route.params.type === 'login') {
    isLogin.value = true;
}
else if (route.params.type === 'register') {
    isLogin.value = false;
}
const goToNextField = (nextField) => {
    lastField.value = currentField.value;
    currentField.value = nextField;
};
const goToPreviousField = () => {
    let currentIndex = fieldOrder.indexOf(currentField.value);
    if (currentIndex > 0) {
        // Set current field as invalid
        currentField.value = fieldOrder[currentIndex - 1];
        data[currentField.value].valid = false;
        // Move to the previous field
        lastField.value = currentField.value;
    }
};
const goToHome = () => {
    router.push({ name: "Home" });
};
const handleSubmit = () => {
    // if (!isLogin.value) {
    //   // Registration process
    //   registerUser({email: data.email.text, password: data.password.text, username: data.username.text}).then(() => console.log(data));
    // } else {
    //   // Login process
    //   loginUser({email: data.email.text, password: data.password.text});
    // }
    goToHome();
};
const MainValidation = (event) => {
    event.preventDefault();
    if (!data.email.valid) {
        validateEmail();
        return;
    }
    else if (!data.password.valid) {
        validatePassword();
        return;
    }
    else if (!isLogin && !data.username.valid) {
        validateUserName();
    }
    handleSubmit();
};
const validateEmail = () => {
    const emailRegex = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    data.email.error = "";
    if (!emailRegex.test(data.email.text)) {
        data.email.error =
            language.value === Languages.us
                ? "Invalid email format"
                : "Недійсний формат пошти";
    }
    else {
        data.email.valid = true;
        goToNextField(FieldsTypes.password);
        data.email.valid = true;
    }
};
const validatePassword = () => {
    data.password.error = "";
    if (data.password.text.length < 8 || data.password.text.length > 30) {
        data.password.error =
            language.value === Languages.us
                ? "8 - 30 characters"
                : "8 - 30 знаків";
    }
    else {
        data.password.valid = true;
        if (!isLogin.value) {
            goToNextField(FieldsTypes.username);
        }
    }
};
const validateUserName = () => {
    data.username.error = "";
    if (data.username.text.length < 4 || data.username.text.length > 15) {
        data.username.error =
            language.value === Languages.us
                ? "4 - 15 characters"
                : "4 - 15 знаків";
    }
    else {
        data.username.valid = true;
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("authentication__form") }, });
    // @ts-ignore
    [InputField,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(InputField, new InputField({ name: ((__VLS_ctx.FieldsTypes.email)), modelValue: ((__VLS_ctx.data.email.text)), error: ((__VLS_ctx.data.email.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'Email' : 'Пошта')), isValid: ((__VLS_ctx.data.email.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.Languages.us ? 'Email address' : 'електронна пошта')), }));
    const __VLS_1 = __VLS_0({ name: ((__VLS_ctx.FieldsTypes.email)), modelValue: ((__VLS_ctx.data.email.text)), error: ((__VLS_ctx.data.email.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'Email' : 'Пошта')), isValid: ((__VLS_ctx.data.email.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.Languages.us ? 'Email address' : 'електронна пошта')), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ name: ((__VLS_ctx.FieldsTypes.email)), modelValue: ((__VLS_ctx.data.email.text)), error: ((__VLS_ctx.data.email.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'Email' : 'Пошта')), isValid: ((__VLS_ctx.data.email.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.Languages.us ? 'Email address' : 'електронна пошта')), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(InputField, __VLS_1));
    // @ts-ignore
    [FieldsTypes, data, data, data, language, Languages, Languages, currentField, lastField,];
    // @ts-ignore
    [InputField,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(InputField, new InputField({ name: ((__VLS_ctx.FieldsTypes.password)), modelValue: ((__VLS_ctx.data.password.text)), error: ((__VLS_ctx.data.password.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'password' : 'пароль')), isValid: ((__VLS_ctx.data.password.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.Languages.us ? 'password' : 'пароль')), }));
    const __VLS_6 = __VLS_5({ name: ((__VLS_ctx.FieldsTypes.password)), modelValue: ((__VLS_ctx.data.password.text)), error: ((__VLS_ctx.data.password.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'password' : 'пароль')), isValid: ((__VLS_ctx.data.password.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.Languages.us ? 'password' : 'пароль')), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ name: ((__VLS_ctx.FieldsTypes.password)), modelValue: ((__VLS_ctx.data.password.text)), error: ((__VLS_ctx.data.password.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'password' : 'пароль')), isValid: ((__VLS_ctx.data.password.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.Languages.us ? 'password' : 'пароль')), }));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(InputField, __VLS_6));
    // @ts-ignore
    [FieldsTypes, data, data, data, language, Languages, Languages, currentField, lastField,];
    if (!__VLS_ctx.isLogin) {
        // @ts-ignore
        [InputField,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(InputField, new InputField({ name: ((__VLS_ctx.FieldsTypes.username)), modelValue: ((__VLS_ctx.data.username.text)), error: ((__VLS_ctx.data.username.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'username' : `ім&#39я користувача`)), isValid: ((__VLS_ctx.data.username.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'username' : `ім&#39я користувача`)), }));
        const __VLS_11 = __VLS_10({ name: ((__VLS_ctx.FieldsTypes.username)), modelValue: ((__VLS_ctx.data.username.text)), error: ((__VLS_ctx.data.username.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'username' : `ім&#39я користувача`)), isValid: ((__VLS_ctx.data.username.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'username' : `ім&#39я користувача`)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        ({}({ name: ((__VLS_ctx.FieldsTypes.username)), modelValue: ((__VLS_ctx.data.username.text)), error: ((__VLS_ctx.data.username.error)), placeholder: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'username' : `ім&#39я користувача`)), isValid: ((__VLS_ctx.data.username.valid)), currentField: (__VLS_ctx.currentField), lastField: ((__VLS_ctx.lastField)), labelText: ((__VLS_ctx.language === __VLS_ctx.Languages.us ? 'username' : `ім&#39я користувача`)), }));
        const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(InputField, __VLS_11));
        // @ts-ignore
        [FieldsTypes, data, data, data, language, language, Languages, Languages, currentField, lastField, isLogin,];
    }
    if (__VLS_ctx.currentField !== __VLS_ctx.FieldsTypes.email) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.goToPreviousField) }, type: ("button"), ...{ class: ("back_button") }, ...{ style: ({}) }, });
        (__VLS_ctx.language === __VLS_ctx.Languages.us ? "Back" : "Назад");
        // @ts-ignore
        [FieldsTypes, language, Languages, currentField, goToPreviousField,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.MainValidation) }, ...{ class: ("authentication__button") }, });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "continue" : "продовжити");
    // @ts-ignore
    [language, Languages, MainValidation,];
    if (__VLS_ctx.isLogin) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__register-block") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__register-text") }, replace: (true), });
        // @ts-ignore
        [isLogin,];
        // @ts-ignore
        const __VLS_15 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.register } })), ...{ class: ("authentication__register-link") }, }));
        const __VLS_17 = __VLS_16({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.register } })), ...{ class: ("authentication__register-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        ({}({ to: (({ name: 'authentication', params: { type: __VLS_ctx.AuthenticationTypes.register } })), ...{ class: ("authentication__register-link") }, }));
        const __VLS_20 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17));
        (__VLS_ctx.language === __VLS_ctx.Languages.uk ? "register" : "зареєстуватися");
        // @ts-ignore
        [language, Languages, AuthenticationTypes,];
        __VLS_nonNullable(__VLS_20.slots).default;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__or") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__or--line") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__or--text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__or--line") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("authentication__social-neworks") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("authentication__facebook") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/facebook__icon.svg"), alt: (""), });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk
        ? "Register with Facebook"
        : "зареєструватися з Facebook");
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("authentication__google") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/google__icon.svg"), alt: (""), });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk
        ? "Register with Google"
        : "зареєструватися з Google");
    // @ts-ignore
    [language, Languages,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("authentication__iphone") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/public/pictures/icons/apple__icon.svg"), alt: (""), });
    (__VLS_ctx.language === __VLS_ctx.Languages.uk
        ? "Register with Apple"
        : "зареєструватися з Apple");
    // @ts-ignore
    [language, Languages,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['authentication'];
        __VLS_styleScopedClasses['authentication__container'];
        __VLS_styleScopedClasses['authentication__form'];
        __VLS_styleScopedClasses['back_button'];
        __VLS_styleScopedClasses['authentication__button'];
        __VLS_styleScopedClasses['authentication__register-block'];
        __VLS_styleScopedClasses['authentication__register-text'];
        __VLS_styleScopedClasses['authentication__register-link'];
        __VLS_styleScopedClasses['authentication__or'];
        __VLS_styleScopedClasses['authentication__or--line'];
        __VLS_styleScopedClasses['authentication__or--text'];
        __VLS_styleScopedClasses['authentication__or--line'];
        __VLS_styleScopedClasses['authentication__social-neworks'];
        __VLS_styleScopedClasses['authentication__facebook'];
        __VLS_styleScopedClasses['authentication__google'];
        __VLS_styleScopedClasses['authentication__iphone'];
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
                InputField: InputField,
                FieldsTypes: FieldsTypes,
                AuthenticationTypes: AuthenticationTypes,
                data: data,
                language: language,
                isLogin: isLogin,
                currentField: currentField,
                lastField: lastField,
                goToPreviousField: goToPreviousField,
                MainValidation: MainValidation,
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
