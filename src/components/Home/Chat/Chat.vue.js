import { ref, onMounted, nextTick } from "vue";
import ChatItem from "../ChatItem/ChatItem.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const text = ref('');
const overflow = ref(false);
const textareaRef = ref(null);
const maxRows = ref(5);
function autoResize() {
    const textarea = textareaRef.value;
    if (!textarea)
        return;
    textarea.style.height = "auto"; // Скидаємо висоту для коректного вимірювання
    const scrollHeight = textarea.scrollHeight;
    const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);
    const rows = Math.floor(scrollHeight / lineHeight);
    if (rows > maxRows.value) {
        textarea.style.height = `${lineHeight * maxRows.value}px`; // Обмеження на висоту
        overflow.value = true;
    }
    else {
        textarea.style.height = `${scrollHeight}px`; // Автоматичне збільшення висоти
        overflow.value = false;
    }
}
onMounted(() => {
    nextTick(() => {
        autoResize();
    });
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat__header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: (""), alt: (""), ...{ class: ("chat__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat__main") }, });
    // @ts-ignore
    [ChatItem,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ChatItem, new ChatItem({ isUserItem: ((true)), text: ("assssssssssssssssssssssssssss"), }));
    const __VLS_1 = __VLS_0({ isUserItem: ((true)), text: ("assssssssssssssssssssssssssss"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ isUserItem: ((true)), text: ("assssssssssssssssssssssssssss"), }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ChatItem, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("chat__form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat__request") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat__textarea-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onInput: (__VLS_ctx.autoResize) }, value: ((__VLS_ctx.text)), ref: ("textareaRef"), rows: ((1)), ...{ style: (({ overflowY: __VLS_ctx.overflow ? 'scroll' : 'hidden' })) }, maxlength: ("500"), ...{ class: ("chat__textarea") }, placeholder: ("CLARIFY YOUR REQUEST"), });
    // @ts-ignore
    (__VLS_ctx.textareaRef);
    // @ts-ignore
    [autoResize, text, overflow, textareaRef,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat__request-controller") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("26"), height: ("26"), viewBox: ("0 0 26 26"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), ...{ class: ("chat__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("\u004d\u0031\u0035\u002e\u0034\u0036\u0034\u0038\u0020\u0032\u0035\u002e\u0035\u0043\u0031\u0034\u002e\u0033\u0037\u0035\u0020\u0032\u0035\u002e\u0035\u0020\u0031\u0034\u002e\u0030\u0031\u0031\u0037\u0020\u0032\u0034\u002e\u0036\u0033\u0032\u0038\u0020\u0031\u0033\u002e\u0036\u0036\u0030\u0032\u0020\u0032\u0033\u002e\u0034\u0034\u0039\u0032\u004c\u0031\u0031\u002e\u0031\u0039\u0039\u0032\u0020\u0031\u0035\u002e\u0030\u0039\u0033\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u004c\u0032\u002e\u0037\u0033\u0038\u0032\u0038\u0020\u0031\u0032\u002e\u0036\u0030\u0039\u0034\u0043\u0031\u002e\u0036\u0031\u0033\u0032\u0038\u0020\u0031\u0032\u002e\u0032\u0036\u0039\u0035\u0020\u0030\u002e\u0037\u0039\u0032\u0039\u0036\u0039\u0020\u0031\u0031\u002e\u0039\u0030\u0036\u0032\u0020\u0030\u002e\u0037\u0039\u0032\u0039\u0036\u0039\u0020\u0031\u0030\u002e\u0038\u0032\u0038\u0031\u0043\u0030\u002e\u0037\u0039\u0032\u0039\u0036\u0039\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0039\u002e\u0039\u0037\u0032\u0036\u0036\u0020\u0031\u002e\u0035\u0035\u0034\u0036\u0039\u0020\u0039\u002e\u0033\u0037\u0035\u0020\u0032\u002e\u0035\u0033\u0039\u0030\u0036\u0020\u0039\u004c\u0032\u0032\u002e\u0036\u0039\u0035\u0033\u0020\u0031\u002e\u0032\u0037\u0037\u0033\u0034\u0043\u0032\u0033\u002e\u0032\u0033\u0034\u0034\u0020\u0031\u002e\u0030\u0036\u0036\u0034\u0031\u0020\u0032\u0033\u002e\u0037\u0031\u0034\u0038\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0030\u002e\u0039\u0034\u0039\u0032\u0031\u0039\u0020\u0032\u0034\u002e\u0031\u0031\u0033\u0033\u0020\u0030\u002e\u0039\u0034\u0039\u0032\u0031\u0039\u0043\u0032\u0034\u002e\u0038\u0037\u0035\u0020\u0030\u002e\u0039\u0034\u0039\u0032\u0031\u0039\u0020\u0032\u0035\u002e\u0033\u0034\u0033\u0038\u0020\u0031\u002e\u0034\u0031\u0037\u0039\u0037\u0020\u0032\u0035\u002e\u0033\u0034\u0033\u0038\u0020\u0032\u002e\u0031\u0037\u0039\u0036\u0039\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0043\u0032\u0035\u002e\u0033\u0034\u0033\u0038\u0020\u0032\u002e\u0035\u0037\u0038\u0031\u0032\u0020\u0032\u0035\u002e\u0032\u0032\u0036\u0036\u0020\u0033\u002e\u0030\u0035\u0038\u0035\u0039\u0020\u0032\u0035\u002e\u0030\u0031\u0035\u0036\u0020\u0033\u002e\u0035\u0039\u0037\u0036\u0036\u004c\u0031\u0037\u002e\u0033\u0033\u0039\u0038\u0020\u0032\u0033\u002e\u0036\u0034\u0038\u0034\u0043\u0031\u0036\u002e\u0039\u0030\u0036\u0032\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0034\u002e\u0037\u0037\u0033\u0034\u0020\u0031\u0036\u002e\u0033\u0030\u0038\u0036\u0020\u0032\u0035\u002e\u0035\u0020\u0031\u0035\u002e\u0034\u0036\u0034\u0038\u0020\u0032\u0035\u002e\u0035\u005a\u004d\u0031\u0031\u002e\u0037\u0032\u0036\u0036\u0020\u0031\u0033\u002e\u0033\u0031\u0032\u0035\u004c\u0031\u0039\u002e\u0037\u0038\u0039\u0031\u0020\u0035\u002e\u0032\u0035\u0043\u0032\u0030\u002e\u0034\u0033\u0033\u0036\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0034\u002e\u0036\u0030\u0035\u0034\u0037\u0020\u0032\u0031\u002e\u0033\u0039\u0034\u0035\u0020\u0033\u002e\u0038\u0035\u0035\u0034\u0037\u0020\u0032\u0032\u002e\u0031\u0036\u0038\u0020\u0033\u002e\u0032\u0032\u0032\u0036\u0036\u0043\u0032\u0031\u002e\u0033\u0030\u0030\u0038\u0020\u0033\u002e\u0036\u0032\u0031\u0030\u0039\u0020\u0032\u0030\u002e\u0033\u0039\u0038\u0034\u0020\u0034\u002e\u0030\u0038\u0039\u0038\u0034\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0039\u002e\u0034\u0036\u0030\u0039\u0020\u0034\u002e\u0034\u0034\u0031\u0034\u0031\u004c\u0033\u002e\u0036\u0031\u0037\u0031\u0039\u0020\u0031\u0030\u002e\u0034\u0034\u0031\u0034\u0043\u0033\u002e\u0034\u0034\u0031\u0034\u0031\u0020\u0031\u0030\u002e\u0035\u0031\u0031\u0037\u0020\u0033\u002e\u0033\u0039\u0034\u0035\u0033\u0020\u0031\u0030\u002e\u0035\u0037\u0030\u0033\u0020\u0033\u002e\u0033\u0039\u0034\u0035\u0033\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0030\u002e\u0036\u0035\u0032\u0033\u0043\u0033\u002e\u0033\u0039\u0034\u0035\u0033\u0020\u0031\u0030\u002e\u0037\u0033\u0034\u0034\u0020\u0033\u002e\u0034\u0035\u0033\u0031\u0032\u0020\u0031\u0030\u002e\u0037\u0038\u0031\u0032\u0020\u0033\u002e\u0036\u0034\u0030\u0036\u0032\u0020\u0031\u0030\u002e\u0038\u0033\u0039\u0038\u004c\u0031\u0031\u002e\u0037\u0032\u0036\u0036\u0020\u0031\u0033\u002e\u0033\u0031\u0032\u0035\u005a\u004d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0031\u0035\u002e\u0036\u0035\u0032\u0033\u0020\u0032\u0032\u002e\u0039\u0032\u0031\u0039\u0043\u0031\u0035\u002e\u0037\u0033\u0034\u0034\u0020\u0032\u0032\u002e\u0039\u0032\u0031\u0039\u0020\u0031\u0035\u002e\u0037\u0038\u0031\u0032\u0020\u0032\u0032\u002e\u0038\u0035\u0031\u0036\u0020\u0031\u0035\u002e\u0038\u0035\u0031\u0036\u0020\u0032\u0032\u002e\u0036\u0037\u0035\u0038\u004c\u0032\u0031\u002e\u0038\u0035\u0031\u0036\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0036\u002e\u0038\u0033\u0032\u0030\u0033\u0043\u0032\u0032\u002e\u0032\u0030\u0033\u0031\u0020\u0035\u002e\u0038\u0038\u0032\u0038\u0031\u0020\u0032\u0032\u002e\u0036\u0038\u0033\u0036\u0020\u0034\u002e\u0039\u0038\u0030\u0034\u0037\u0020\u0032\u0033\u002e\u0030\u0038\u0032\u0020\u0034\u002e\u0030\u0038\u0039\u0038\u0034\u0043\u0032\u0032\u002e\u0034\u0036\u0030\u0039\u0020\u0034\u002e\u0038\u0038\u0036\u0037\u0032\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0031\u002e\u0036\u0037\u0035\u0038\u0020\u0035\u002e\u0038\u0037\u0031\u0030\u0039\u0020\u0032\u0031\u002e\u0030\u0034\u0033\u0020\u0036\u002e\u0035\u0030\u0033\u0039\u0031\u004c\u0031\u0032\u002e\u0039\u0038\u0030\u0035\u0020\u0031\u0034\u002e\u0035\u0036\u0036\u0034\u004c\u0031\u0035\u002e\u0034\u0035\u0033\u0031\u0020\u0032\u0032\u002e\u0036\u0035\u0032\u0033\u0043\u0031\u0035\u002e\u0035\u0031\u0031\u0037\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0032\u0032\u002e\u0038\u0033\u0039\u0038\u0020\u0031\u0035\u002e\u0035\u0035\u0038\u0036\u0020\u0032\u0032\u002e\u0039\u0032\u0031\u0039\u0020\u0031\u0035\u002e\u0036\u0035\u0032\u0033\u0020\u0032\u0032\u002e\u0039\u0032\u0031\u0039\u005a"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['chat'];
        __VLS_styleScopedClasses['chat__header'];
        __VLS_styleScopedClasses['chat__title'];
        __VLS_styleScopedClasses['chat__img'];
        __VLS_styleScopedClasses['chat__main'];
        __VLS_styleScopedClasses['chat__form'];
        __VLS_styleScopedClasses['chat__request'];
        __VLS_styleScopedClasses['chat__textarea-container'];
        __VLS_styleScopedClasses['chat__textarea'];
        __VLS_styleScopedClasses['chat__request-controller'];
        __VLS_styleScopedClasses['chat__img'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ChatItem: ChatItem,
                text: text,
                overflow: overflow,
                textareaRef: textareaRef,
                autoResize: autoResize,
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
