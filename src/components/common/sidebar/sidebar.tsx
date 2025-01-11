"use client"
import type { SidebarSetting } from "@/types/store/sidebar-setting.type";
import { type FC, type JSX, type PropsWithChildren, useRef } from "react";
import cn from "clsx";
import styles from "./sidebar.module.sass"
import { useAutoClose } from "@/hooks/api/common/use-auto-close.hook";

interface Props extends PropsWithChildren {
    position: "left" | "right";
    state: SidebarSetting;
    className?: string;
}

export const Sidebar: FC<Props> = ({ position, state, className = "", children }): JSX.Element => {
    const ref = useRef(null);
    useAutoClose(ref, state);
    return (
        <aside
            className={cn(styles.sidebar, className, styles[position], {
                [styles.open]: state.isOpen
            })}
            ref={ref}
        >
            {children}
        </aside>
    );
};