import { TextInput } from "@/shared";
import { Button } from "@mui/material";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import clsx from 'classnames';
import styles from "./send-message.module.scss";

export const SendMessage: FC = (): JSX.Element => {
    const { register } = useForm();
    return (
        <form className={clsx(styles.form)}>
            <TextInput
                register={register}
                registerOptions={{
                    required: true
                }}
                type="text"
                label="Повідомлення"
                name="Повідомлення"
            />
            <Button type="submit" variant="contained">Відправити</Button>
        </form>
    );
};