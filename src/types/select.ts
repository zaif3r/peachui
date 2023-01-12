import { InputProps } from "./input";

export interface InputSelectProps extends InputProps<any> {
    modelValue?: any;
    bordered?: boolean;
    options?: SelectOption[];
    placeholder?: string;
}

export interface SelectOption {
    value: any;
    label: string;
}
