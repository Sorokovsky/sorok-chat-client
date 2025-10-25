import type { FC, JSX } from "react";
import { Form } from '@/shared/ui/';
import { useRegistration } from '@/features/authentication';
import { RegistrationDto } from '@/features/authentication/models/registration';
import { REGISTER_INPUTS } from '@/features/authentication/constants/register-form';

export const RegisterForm: FC = (): JSX.Element => {
    const { mutate: register } = useRegistration();
    return (
        <Form 
            title="Реєстрація"
            submitHandler={(data) => register(data as RegistrationDto)}
            inputs={REGISTER_INPUTS}
            submitText="Зареєструватися"
        />
    );
};