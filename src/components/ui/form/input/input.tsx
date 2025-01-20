import {type FC, type InputHTMLAttributes, type JSX} from "react";
import cn from "clsx";
import styles from "./input.module.sass";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: FC<Props> = ({label, className, ...rest}): JSX.Element => {
    return (
        <label
            className={cn(styles.label, className)}
        >
            <h6
                className={cn(styles.title)}
            >
                {label}
            </h6>
            <input
                className={cn(styles.input)}
                {...rest}
            />
        </label>
    );
};