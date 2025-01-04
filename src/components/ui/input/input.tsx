import {type FC, type InputHTMLAttributes, type JSX} from "react";
import cn from "clsx";
import styles from "./input.module.sass";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input: FC<Props> = ({label = "", className,...rest}: Props): JSX.Element => {
    return (
        <label className={cn(styles.label)}>
            <span>{label}</span>
            <input
                className={cn(styles.input, className)}
                autoComplete={"false"}
                {...rest}
            />
        </label>
    );
}