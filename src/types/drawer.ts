export interface DrawerProps {
    modelValue?: boolean;
    transition?: string;
}

export interface DrawerButtonProps {
    modelValue?: boolean;
}

export interface DrawerEmits {
    (event: "update:modelValue", value: boolean): void;
}
