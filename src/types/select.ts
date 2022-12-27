import { InputProps, InputModel } from "./input";

export interface InputSelectModel extends InputModel<SelectOption> {}

export interface InputSelectProps extends InputProps<SelectOption> {
    modelValue?: InputSelectModel;
    bordered?: boolean;
    options?: SelectOption[];
    placeholder?: string;
}

export interface SelectOption {
    value: string;
    label: string;
}
