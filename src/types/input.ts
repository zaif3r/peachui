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

export interface InputTextModel extends InputModel<string> {}

export interface InputTextProps extends InputProps<string> {
    type?: InputTextType;
    modelValue?: InputTextModel;
    placeholder?: string;
    bordered?: boolean;
}

export type InputCheckboxType = "checkbox" | "toggle";

export interface InputCheckboxModel extends InputModel<boolean> {}

export interface InputCheckboxProps extends InputProps<boolean> {
    type?: InputCheckboxType;
    modelValue?: InputCheckboxModel;
    bordered?: boolean;
}

export interface InputRadioModel extends InputModel<boolean> {}

export interface InputRadioProps extends InputProps<boolean> {
    modelValue?: InputRadioModel;
}

export interface InputFileModel extends InputModel<File[]> {}

export interface InputFileProps extends InputProps<File[]> {
    modelValue?: InputFileModel;
    bordered?: boolean;
}
