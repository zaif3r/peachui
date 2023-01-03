import { InputProps } from "./input";

export interface InputSelectProps extends InputProps<string> {
    modelValue?: string;
    bordered?: boolean;
    options?: SelectOption[];
    placeholder?: string;
}

export interface SelectOption {
    value: string;
    label: string;
}
