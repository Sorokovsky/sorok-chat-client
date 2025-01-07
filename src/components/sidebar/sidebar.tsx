import { type PropsWithChildren, type FC, type JSX } from "react";
import cn from "clsx";
import styles from "./sidebar.module.sass";

export type Position = "left" | "right"

interface Props extends PropsWithChildren {
    position?: Position;
}

export const Sidebar: FC<Props> = ({ position = 'left', children }): JSX.Element => {
    return (

        <aside
            className={cn(styles.sidebar, styles[position])}
        >
            {children}
        </aside>
    );
}