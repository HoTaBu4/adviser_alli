const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    subTitle: {
        type: String,
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        title: {
            type: String,
        },
        url: {
            type: String,
        },
        subTitle: {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("select-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("select-item__header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("select-item__title") }, });
    (__VLS_ctx.title);
    // @ts-ignore
    [title,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.url)), alt: (""), ...{ class: ("select-item__img") }, });
    // @ts-ignore
    [url,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("select-item__sub-title") }, });
    (__VLS_ctx.subTitle);
    // @ts-ignore
    [subTitle,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['select-item'];
        __VLS_styleScopedClasses['select-item__header'];
        __VLS_styleScopedClasses['select-item__title'];
        __VLS_styleScopedClasses['select-item__img'];
        __VLS_styleScopedClasses['select-item__sub-title'];
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
            title: {
                type: String,
            },
            url: {
                type: String,
            },
            subTitle: {
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
        title: {
            type: String,
        },
        url: {
            type: String,
        },
        subTitle: {
            type: String,
        },
    },
});
;
