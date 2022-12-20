import { InputModel } from "./input";
import { ButtonProps } from "./button";

export interface FormProps {
    error?: string;
    loading?: boolean;
    inputs?: {
        [key: string]: FormInputModel<any>;
    };
    action?: () => Promise<void>;
}

export interface FormButtonProps extends ButtonProps {
    form: FormProps;
}

export interface FormInputModel<T> extends InputModel<T> {
    value?: T;
    valid?: boolean | null;
    validator?: FormInputValidator<T>;
    error?: string;
}

export type FormInputValidator<T> =
    | "required"
    | "email"
    | "password"
    | "password-confirm"
    | ((value: T) => boolean);
