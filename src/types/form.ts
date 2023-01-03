import { ButtonProps } from "./button";
import { InputValidation } from "./input";

export interface FormProps {
    loading?: boolean;
    error?: string;
    action?: () => Promise<void>;
    inputs?: {
        [key: string]: FormInput<any>;
    };
}

export interface FormButtonProps extends ButtonProps {
    form: FormProps;
}

export interface FormInput<T> {
    value?: T;
    validation?: InputValidation<T>;
}
