const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    isOpenSidebar: {
        type: Boolean,
    },
});
const emit = defineEmits(["toggle-sidebar"]);
const toggleSidebar = () => {
    emit("toggle-sidebar");
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isOpenSidebar: {
            type: Boolean,
        },
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ onClick: (__VLS_ctx.toggleSidebar) }, ...{ class: ("ham hamRotate ham1") }, ...{ class: (({ active: __VLS_ctx.isOpenSidebar })) }, viewBox: ("0 0 100 100"), });
    __VLS_styleScopedClasses = ({ active: isOpenSidebar });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ ...{ class: ("line top") }, d: ("m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"), });
    // @ts-ignore
    [toggleSidebar, isOpenSidebar,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ ...{ class: ("line middle") }, d: ("m 30,50 h 40"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ ...{ class: ("line bottom") }, d: ("m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ham'];
        __VLS_styleScopedClasses['hamRotate'];
        __VLS_styleScopedClasses['ham1'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['top'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['middle'];
        __VLS_styleScopedClasses['line'];
        __VLS_styleScopedClasses['bottom'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                toggleSidebar: toggleSidebar,
            };
        },
        props: {
            isOpenSidebar: {
                type: Boolean,
            },
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        isOpenSidebar: {
            type: Boolean,
        },
    },
    emits: {},
});
;
