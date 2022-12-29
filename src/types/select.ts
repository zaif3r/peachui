import { InputProps, InputModel } from "./input";

export interface InputSelectModel extends InputModel<string> {}

export interface InputSelectProps extends InputProps<string> {
    modelValue?: InputSelectModel;
    bordered?: boolean;
    options?: SelectOption[];
    placeholder?: string;
}

export interface SelectOption {
    value: string;
    label: string;
}
