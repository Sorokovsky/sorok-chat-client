import {type FC, type JSX, type PropsWithChildren} from "react";
import NextLink from "next/link";
import cn from "clsx";
import styles from "./link.module.sass";

interface Props extends PropsWithChildren {
    to: string;
    className?: string;
}

export const Link: FC<Props> = ({to, children, className}): JSX.Element => {
    return (
        <NextLink
            href={to}
            className={cn(styles.link, className)}
        >
            {children}
        </NextLink>
    );
};