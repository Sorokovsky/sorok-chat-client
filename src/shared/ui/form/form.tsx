import type { FC, JSX } from "react";
import clsx from "classnames";
import styles from "./form.module.scss";
import type { FormProps } from "./form.props";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextInput } from "./input/input";

export const Form: FC<FormProps> = ({ title, inputs, submitHandler, submitText }): JSX.Element => {
    const { register, handleSubmit } = useForm();
    return (
        <div className={clsx(styles.form)}>
            <form onSubmit={handleSubmit(submitHandler)} >
                <Typography component={"h3"} variant="h3" className={clsx(styles.title)}>{title}</Typography>
                
                {inputs.map(input => (
                    <TextInput
                        key={input.name}
                        label={input.label}
                        name={input.name}
                        register={register}
                        type={input.type}
                        registerOptions={input.registerOptions}
                    />
                ))}
                <Button type="submit" variant="contained">{submitText}</Button>
            </form>
        </div>
    );
};