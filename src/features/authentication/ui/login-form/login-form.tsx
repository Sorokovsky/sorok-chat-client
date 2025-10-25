import { Form } from "@/shared";
import type { FC, JSX } from "react";
import { useLogin } from "@/features/authentication";
import { LOGIN_INPUTS } from "@/features/authentication";
import type { LoginDto } from "../../models";

export const LoginForm: FC = (): JSX.Element => {
    const { mutate: login } = useLogin();
    return (
        <Form
                submitHandler={data => login(data as LoginDto)}
                title="Форма входу"
                submitText="Увійти"
                inputs={LOGIN_INPUTS}
            />
    );
};