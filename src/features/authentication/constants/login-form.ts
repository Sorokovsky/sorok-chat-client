import { InputProps } from '@/shared/';

export const LOGIN_INPUTS: Omit<InputProps, "register">[] = [
    {
        label: "Електронна адреса",
        registerOptions: {
            required: true,
        },
        name: "email",
        type: "email",
    },
    {
        label: "Пароль",
        registerOptions: {
            required: true,
        },
        name: "password",
        type: "password",
    },
];