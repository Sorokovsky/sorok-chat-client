import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        ></header>
    );
}