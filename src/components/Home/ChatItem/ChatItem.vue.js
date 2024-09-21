const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    isUserItem: {
        type: Boolean,
    },
    text: {
        type: String,
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isUserItem: {
            type: Boolean,
        },
        text: {
            type: String,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat-item") }, ...{ class: (({ 'chat-item--ai': !__VLS_ctx.isUserItem, 'chat-item--user': __VLS_ctx.isUserItem })) }, });
    __VLS_styleScopedClasses = ({ 'chat-item--ai': !isUserItem, 'chat-item--user': isUserItem });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat-item__image") }, });
    if (!__VLS_ctx.isUserItem) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/pictures/icons/mage_robot-happy.svg"), alt: (""), ...{ class: ("chat-item__img") }, });
        // @ts-ignore
        [isUserItem, isUserItem, isUserItem,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat-item__text") }, ...{ class: (({
                'chat-item__text--ai': !__VLS_ctx.isUserItem,
                'chat-item__text--user': __VLS_ctx.isUserItem,
            })) }, });
    __VLS_styleScopedClasses = ({
        'chat-item__text--ai': !isUserItem,
        'chat-item__text--user': isUserItem,
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chat-item__text-wrapper") }, });
    (__VLS_ctx.text);
    // @ts-ignore
    [isUserItem, isUserItem, text,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['chat-item'];
        __VLS_styleScopedClasses['chat-item__image'];
        __VLS_styleScopedClasses['chat-item__img'];
        __VLS_styleScopedClasses['chat-item__text'];
        __VLS_styleScopedClasses['chat-item__text-wrapper'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
        props: {
            isUserItem: {
                type: Boolean,
            },
            text: {
                type: String,
            },
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        isUserItem: {
            type: Boolean,
        },
        text: {
            type: String,
        },
    },
});
;
