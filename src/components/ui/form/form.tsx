import {type FC, type FormHTMLAttributes, type JSX} from "react";
import cn from "clsx";
import styles from "./form.module.sass";

type Props = FormHTMLAttributes<HTMLFormElement>;

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