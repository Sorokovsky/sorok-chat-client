"use client"
import {type FC, type JSX, type PropsWithChildren} from "react";
import cn from "clsx";
import styles from "./sidebar.module.sass";

interface Props extends PropsWithChildren {
    position: "left" | "right";
    isOpen: boolean;
    className?: string;
}

export const Sidebar: FC<Props> = ({position, isOpen, className = "", children}): JSX.Element => {
    return (
        <aside
            className={cn(styles.sidebar, className, styles[position], {
                [styles.open]: isOpen
            })}
        >
            {children}
        </aside>
    );
};