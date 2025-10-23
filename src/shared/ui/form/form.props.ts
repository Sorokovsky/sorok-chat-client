import type { InputProps } from './input/input.props';
export interface FormProps {
    inputs: InputProps[];
    title: string;
    submitText: string;
    submitHandler: (data: unknown) => void;
};