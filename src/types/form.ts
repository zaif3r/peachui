export interface FormProps {
    action: () => void | Promise<void>;
    validations?: FormValidation[];
}

export interface FormValidation<T = any> {
    value?: boolean;
    validator?:
        | "not-empty"
        | "email"
        | "password"
        | "password-confirm"
        | ((input: T) => boolean);
}
