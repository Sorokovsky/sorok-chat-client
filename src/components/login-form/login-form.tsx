import {type FC, type JSX} from "react";
import {Input} from "@/ui/input/input";
import {Button} from "@/ui/button/button";
import {Form} from "@/ui/form/form";
import {useForm} from "react-hook-form";
import {LoginUser} from "@/types/models/auth/login.type";
import {useLogin} from "@/hooks/use-login.hook";

export const LoginForm: FC = (): JSX.Element => {
    const { handleSubmit, register } = useForm<LoginUser>();
    const { mutate } = useLogin();
    const login = (login: LoginUser) => {
        mutate(login);
    }
    return (
        <>
            <Form
                onSubmit={handleSubmit(login)}
            >
                <Input
                    label={"Email"}
                    type={"email"}
                    placeholder={"Enter email"}
                    {...register("email", {
                        required: true,
                    })}
                />
                <Input
                    label={"Password"}
                    type={"password"}
                    placeholder={"Enter password"}
                    {...register("password", {
                        required: true,
                    })}
                />
                <Button>Login</Button>
            </Form>
        </>
    );
}