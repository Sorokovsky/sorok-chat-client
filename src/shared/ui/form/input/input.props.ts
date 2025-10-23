import { HTMLInputTypeAttribute } from 'react';
import type { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
export interface InputProps {
    label: string;
    name: string;
    registerOptions: RegisterOptions;
    register?: UseFormRegister<FieldValues>;
    type: HTMLInputTypeAttribute;
};