import { InputProps } from "@/shared";

export const NEW_CHANNEL_INPUT: InputProps[] = [
    {
        label: "Назва",
        name: "name",
        registerOptions: {
            required: true,
        },
        type: "text",
    },
    {
        label: "Опис",
        name: "description",
        registerOptions: {
            required: true,
        },
        type: "text",
    },
];