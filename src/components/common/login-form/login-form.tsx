"use client"
import {type FC, type JSX} from "react";
import {Form} from "@/ui/form/form";
import {Heading} from "@/ui/heading/heading";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {Auth} from "@/types/models/auth/auth.type";
import {useLogin} from "@/hooks/api/use-login.hook";
import {Input} from "@/ui/form/input/input";
import {Button} from "@/ui/form/button/button";

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
                label={"Ваша електронна адреса:"}
                placeholder={"Введіть електронну адресу"}
                autoComplete={"email"}
                type={"email"}
                {...register("email", {
                    required: true,
                })}
            />
            <Input
                label={"Ваш пароль:"}
                placeholder={"Введіть пароль"}
                type={"password"}
                autoComplete={"current-password"}
                {...register("password", {
                    required: true,
                })}
            />
            <Button>Увійти</Button>
        </Form>
    );
};