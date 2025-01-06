import { type FC, type FormHTMLAttributes, type JSX, type RefObject } from 'react';
import cn from "clsx";
import styles from "./form.module.sass";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    ref?: RefObject<HTMLFormElement | null>; 
}

export const Form: FC<Props> = ({className, children, ...rest}: Props): JSX.Element => {
    return (
        <form
            className={cn(styles.form, className)}
            {...rest}
        >
            {children}
        </form>
    );
}