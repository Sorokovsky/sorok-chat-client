"use client"
import {type FC, type JSX} from "react";
import {Form} from "@/ui/form/form";
import {Heading} from "@/ui/heading/heading";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {Auth} from "@/types/models/auth/auth.type";
import {useLogin} from "@/hooks/api/use-login.hook";
import {Input} from "@/ui/form/input/input";

export const LoginForm: FC = (): JSX.Element => {
    const {register, handleSubmit} = useForm<Auth>();
    const {mutate} = useLogin();
    const login: SubmitHandler<Auth> = (data: Auth) => {
        mutate(data);
    };
    return (
        <Form
            onSubmit={handleSubmit(login)}
        >
            <Heading>Вхід</Heading>
            <Input
                placeholder={"Введіть електронну адресу"}
                type={"email"}
                {...register("email", {
                    required: true,
                })}
            />
            <Input
                placeholder={"Введіть пароль"}
                type={"password"}
                {...register("password", {
                    required: true,
                })}
            />
        </Form>
    );
};