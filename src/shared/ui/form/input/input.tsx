import { TextField } from "@mui/material";
import type { FC, JSX } from "react";
import type { InputProps } from './input.props';

export const TextInput: FC<InputProps> = ({ label, name, registerOptions, type, register }): JSX.Element => {
    return (
        <>
            <TextField
                variant="outlined"
                label={label}
                type={type}
                required={registerOptions.required as boolean || false}
                {...register!(name, registerOptions)}
            />
        </>
    );
};