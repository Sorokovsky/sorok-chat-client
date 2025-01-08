import { type PropsWithChildren, type FC, type JSX, type RefObject, useRef } from "react";
import cn from "clsx";
import styles from "./sidebar.module.sass";
import { useCloseSidebar } from '../../hooks/use-close-sidebar-hook';

export type Position = "left" | "right";

interface Props extends PropsWithChildren {
    position?: Position;
    isOpen: boolean;
    close?: () => void;
    closerSelector?: string;
}

export const Sidebar: FC<Props> = ({ position = 'left', children, isOpen, close = () => { }, closerSelector = ""}): JSX.Element => {
    const ref = useRef<HTMLElement | null>(null);
    useCloseSidebar(close, ref, closerSelector);
    return (
        <aside
            className={cn(styles.sidebar, styles[position], {
                [styles.open]: isOpen
            })}
            ref={ref}
        >
            {children}
        </aside>
    );
}