const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    isValid: {
        type: Boolean,
        required: false,
    },
    error: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        required: true,
    },
    modelValue: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    currentField: {
        type: String,
        required: false,
    },
    isStatic: {
        type: Boolean,
        required: false
    },
    labelText: {
        type: String,
        required: true
    },
    lastField: {
        type: String,
        required: false,
    },
});
const emit = defineEmits(['update:modelValue']);
const handleInput = (event) => {
    emit('update:modelValue', event.target.value);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isValid: {
            type: Boolean,
            required: false,
        },
        error: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        currentField: {
            type: String,
            required: false,
        },
        isStatic: {
            type: Boolean,
            required: false
        },
        labelText: {
            type: String,
            required: true
        },
        lastField: {
            type: String,
            required: false,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-field") }, ...{ class: (({
                'slide-out-left': !__VLS_ctx.isStatic && (__VLS_ctx.lastField !== __VLS_ctx.name || __VLS_ctx.lastField === __VLS_ctx.name) && __VLS_ctx.currentField !== __VLS_ctx.name,
                'slide-in-right': !__VLS_ctx.isStatic && __VLS_ctx.lastField !== __VLS_ctx.name && __VLS_ctx.currentField === __VLS_ctx.name,
                'right-position': !__VLS_ctx.isStatic && __VLS_ctx.currentField !== __VLS_ctx.name && !__VLS_ctx.isValid,
                'input-field--static': __VLS_ctx.isStatic
            })) }, });
    __VLS_styleScopedClasses = ({
        'slide-out-left': !isStatic && (lastField !== name || lastField === name) && currentField !== name,
        'slide-in-right': !isStatic && lastField !== name && currentField === name,
        'right-position': !isStatic && currentField !== name && !isValid,
        'input-field--static': isStatic
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((__VLS_ctx.name)), ...{ class: ("input-field__label") }, ...{ class: (({ 'input-field__label--error': __VLS_ctx.error })) }, });
    __VLS_styleScopedClasses = ({ 'input-field__label--error': error });
    (__VLS_ctx.error ? __VLS_ctx.error : `${__VLS_ctx.labelText}`);
    // @ts-ignore
    [isStatic, isStatic, isStatic, isStatic, lastField, lastField, lastField, name, name, name, name, name, name, name, currentField, currentField, currentField, isValid, error, error, error, labelText,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.handleInput) }, type: ("text"), ...{ class: ("input-field__input") }, placeholder: ((__VLS_ctx.placeholder)), name: ((__VLS_ctx.name)), value: ((__VLS_ctx.modelValue)), ...{ class: (({ 'input-field__input--error': __VLS_ctx.error })) }, });
    __VLS_styleScopedClasses = ({ 'input-field__input--error': error });
    // @ts-ignore
    [name, error, handleInput, placeholder, modelValue,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['input-field'];
        __VLS_styleScopedClasses['input-field__label'];
        __VLS_styleScopedClasses['input-field__input'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                handleInput: handleInput,
            };
        },
        props: {
            isValid: {
                type: Boolean,
                required: false,
            },
            error: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                required: true,
            },
            modelValue: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            currentField: {
                type: String,
                required: false,
            },
            isStatic: {
                type: Boolean,
                required: false
            },
            labelText: {
                type: String,
                required: true
            },
            lastField: {
                type: String,
                required: false,
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
        isValid: {
            type: Boolean,
            required: false,
        },
        error: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        currentField: {
            type: String,
            required: false,
        },
        isStatic: {
            type: Boolean,
            required: false
        },
        labelText: {
            type: String,
            required: true
        },
        lastField: {
            type: String,
            required: false,
        },
    },
    emits: {},
});
;
