import {InputHTMLAttributes, type ReactNode} from "react";
import {type FieldValues, type RegisterOptions} from "react-hook-form";

export type FormField<T extends FieldValues = FieldValues> = {
    name: string;
    palaceholder: string;
    label: ReactNode;
    options: RegisterOptions<T>;
    type: InputHTMLAttributes<HTMLInputElement>['type'];
}