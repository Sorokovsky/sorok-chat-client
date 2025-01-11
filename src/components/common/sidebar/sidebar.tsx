"use client"
import type { SidebarSetting } from "@/types/store/sidebar-setting.type";
import type { FC, JSX } from "react";
import cn from "clsx";
import styles from "./sidebar.module.sass"

interface Props {
    position: "left" | "right";
    state: SidebarSetting;
    className?: string;
}

export const Sidebar: FC<Props> = ({position, state, className = ""}): JSX.Element => {
    return (
        <aside
            className={cn(styles.sidebar, className, styles[position], {
                [styles.open]: state.isOpen
            })}
        >

        </aside>
    );
};