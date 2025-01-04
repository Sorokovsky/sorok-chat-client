import {type FC, type InputHTMLAttributes, type JSX} from "react";
import cn from "clsx";
import styles from "./input.module.sass";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({className,...rest}: Props): JSX.Element => {
    return (
        <>
            <input
                className={cn(styles.input, className)}
                autoComplete={"false"}
                {...rest}
            />
        </>
    );
}