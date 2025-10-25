import { InputProps } from "@/shared";

export const ADD_USER_INPUTS: InputProps[] = [
    {
        label: "Електронна адреса користувача",
        name: "userEmail",
        registerOptions: {
            required: true
        },
        type: "email"
    }
];