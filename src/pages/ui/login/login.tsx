import { FC, JSX } from "react";
import { Form } from '@/shared/';
import { LOGIN_INPUTS } from "@/features/authentication/constants/login-form";
import { LoginDto, useLogin } from "@/features/authentication";

export const LoginPage: FC = (): JSX.Element => {
    const { mutate: login } = useLogin();
    return (
        <>
            <Form
                submitHandler={data => login(data as LoginDto)}
                title="Форма входу"
                submitText="Увійти"
                inputs={LOGIN_INPUTS}
            />
        </>
    );
};