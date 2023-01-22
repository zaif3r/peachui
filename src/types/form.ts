import { ButtonProps } from "./button";
import { InputValidation } from "./input";

export type FormState = {
    loading?: boolean;
    error?: string;
} & {
    [key: string]: FormInput<any>;
}

export interface FormButtonProps extends ButtonProps {
    form: FormState;
    action?: (form: FormState) => void | Promise<void>;
    scrollOnError?: boolean;
}

export interface FormInput<T> extends InputValidation<T> {
    id?: string;
    value?: T;
}
