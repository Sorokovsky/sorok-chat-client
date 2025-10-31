import type {FC, JSX} from "react";
import type {SidebarProps} from "./sidebar.props";
import clsx from "clsx";
import styles from "./sidebar.module.scss";
import {Position} from "@/widgets/types";

export const Sidebar: FC<SidebarProps> = ({children, position = Position.left, isOpen}: SidebarProps): JSX.Element => {
    return (
        <aside
            className={clsx(styles.sidebar, styles[position], {
                [styles.open]: isOpen,
            })}
        >
            {children}
        </aside>
    );
};