"use client"
import {type Form} from "@/types/form.type";
import {LoginUser} from "@/types/models/auth/login.type";
import {useLogin} from "@/hooks/use-login.hook";

export const useGetLoginForm: () => Form<LoginUser> = () => {
    const {mutate} = useLogin();
    return {
        onSubmit: (data: LoginUser) => {
            mutate(data);
        },
        submitText: "Login",
        fields: [
            {
                name: "email",
                label: "Email",
                palaceholder: "Enter email",
                options: {required: true},
                type: "email"
            },
            {
                name: "password",
                label: "Password",
                palaceholder: "Enter password",
                options: {required: true},
                type: "password"
            }
        ]
    }
}