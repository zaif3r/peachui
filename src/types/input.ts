export interface InputModel<T> {
    value?: T;
    valid?: boolean | null;
}

export interface InputProps<T> {
    modelValue?: InputModel<T>;
    disabled?: boolean;
}

export interface InputEmits<T = any> {
    (e: "update:modelValue", value: InputModel<T>): void;
}

export type InputTextType = "text" | "email" | "password";

export interface InputTextProps extends InputProps<string> {
    type?: InputTextType;
    placeholder?: string;
    bordered?: boolean;
}

export type InputCheckboxType = "checkbox" | "toggle";

export interface InputCheckboxProps extends InputProps<boolean> {
    type?: InputCheckboxType;
    bordered?: boolean;
}
