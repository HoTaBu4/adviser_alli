declare const _default: import("vue").DefineComponent<{
    isValid: {
        type: BooleanConstructor;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    currentField: {
        type: StringConstructor;
        required: false;
    };
    isStatic: {
        type: BooleanConstructor;
        required: false;
    };
    labelText: {
        type: StringConstructor;
        required: true;
    };
    lastField: {
        type: StringConstructor;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isValid: {
        type: BooleanConstructor;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    currentField: {
        type: StringConstructor;
        required: false;
    };
    isStatic: {
        type: BooleanConstructor;
        required: false;
    };
    labelText: {
        type: StringConstructor;
        required: true;
    };
    lastField: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    isValid: boolean;
    error: string;
    isStatic: boolean;
}, {}>;
export default _default;
