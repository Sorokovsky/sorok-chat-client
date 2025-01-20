"use client"
import {type ButtonHTMLAttributes, type FC, type JSX} from "react";
import cn from "clsx";
import styles from "./button.module.sass";
import {Loader} from "@/ui/loader/loader";
import {useFormStatus} from "react-dom";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({children, className, type = 'submit', ...rest}): JSX.Element => {
    const {pending} = useFormStatus();
    return (
        <button
            {...rest}
            type={type}
            className={cn(styles.button, className)}
        >
            {pending ? <Loader/> : children}
        </button>
    );
};