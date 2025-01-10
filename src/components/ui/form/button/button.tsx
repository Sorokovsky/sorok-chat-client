import {type ButtonHTMLAttributes, type FC, type JSX} from "react";
import cn from "clsx";
import styles from "./button.module.sass";
import {Loader} from "@/ui/loader/loader";
import {useFormStatus} from "react-dom";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<Props> = ({className, type = 'submit', disabled, children, ...rest}: Props): JSX.Element => {
    const {pending} = useFormStatus();
    return (
        <button
            className={cn(styles.button, className)}
            type={type}
            disabled={disabled || pending}
            {...rest}
        >
            {pending ? <Loader /> : children}
        </button>
    )
}