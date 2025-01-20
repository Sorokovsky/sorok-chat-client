import {type FC, type JSX} from "react";
import {LoginForm} from "@/commons/login-form/login-form";
import cn from "clsx";
import styles from "./login.module.sass";

export const LoginPage: FC = (): JSX.Element => {
    return (
        <section
            className={cn(styles.page)}
        >
            <LoginForm/>
        </section>
    );
};