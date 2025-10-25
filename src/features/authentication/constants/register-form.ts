import { InputProps } from "@/shared/";

export const REGISTER_INPUTS: InputProps[] = [
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
    {
        label: "Ім'я",
        registerOptions: {
            required: true,
        },
        name: "firstName",
        type: "text",
    },
    {
        label: "Прізвище",
        registerOptions: {
            required: true,
        },
        name: "lastName",
        type: "text",
    },
    {
        label: "По батькові",
        registerOptions: {
            required: true,
        },
        name: "middleName",
        type: "text",
    },
];