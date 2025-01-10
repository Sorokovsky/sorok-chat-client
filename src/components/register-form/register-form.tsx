import {useRef, type FC, type JSX} from "react";
import {Form} from "@/ui/form/form";
import {useForm} from "react-hook-form";
import {type CreateUser} from "@/types/models/users/create-user.type";
import {useRegister} from "@/hooks/use-register.hook";
import {Heading} from "@/ui/heading/heading";
import {Button} from "@/components/ui/form/button/button";
import {Input} from "@/ui/form/input/input";
import {ImageInput} from "@/ui/form/image-input/image-input";

export const RegisterForm: FC = (): JSX.Element => {
    const { handleSubmit, register } = useForm<CreateUser>();
    const ref = useRef<HTMLFormElement>(null);
    const { mutate } = useRegister();
    const registerHandler: (data: CreateUser) => void = (data: CreateUser) => {
        const { current: form } = ref;
        const formData = new FormData(form!);
        formData.forEach((value, key) => {
            //@ts-ignore
            data[key] = value;
            
        });        
        mutate(data);
    }
    return (
        <>
            <Form
                ref={ref}
                onSubmit={handleSubmit(registerHandler)}
            >
                <Heading tag={"h1"} >Register form</Heading>
                <Input
                label={"Enter email"}
                type={"email"}
                placeholder={"Email"}
                {...register("email", {
                    required: true,
                })}
                />
                <Input
                label={"Enter password"}
                type={"password"}
                placeholder={"Password"}
                {...register("password", {
                    required: true,
                })}
                />
                <Input
                label={"Enter Surname"}
                type={"text"}
                placeholder={"Surname"}
                {...register("surname", {
                    required: false,
                })}
                />
                <Input
                    label={"Enter Name"}
                    type={"text"}
                    placeholder={"Name"}
                    {...register("name", {
                        required: false,
                    })}
                />
                <Input
                    label={"Enter Middle name"}
                    type={"text"}
                    placeholder={"Middle name"}
                    {...register("middleName", {
                        required: false,
                    })}
                />
                <ImageInput
                    label={"Choose Avatar"}
                    type={"file"}
                    placeholder={"Avatar"}
                    {...register("avatar", {
                        required: false,
                    })}
                />
                <Button>Register</Button>
            </Form>
        </>
    );
}