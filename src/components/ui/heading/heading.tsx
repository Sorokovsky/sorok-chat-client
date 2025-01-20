import {type FC, type JSX, type PropsWithChildren} from "react";
import cn from "clsx";
import styles from "./heading.module.sass";

interface Props extends PropsWithChildren {
    tag?: keyof JSX.IntrinsicElements
}

const h1: keyof JSX.IntrinsicElements = 'h1';

export const Heading: FC<Props> = ({tag = h1, children}): JSX.Element => {
    const Tag: keyof JSX.IntrinsicElements = tag;
    return (
        <Tag
            className={cn(styles.heading)}
        >
            {children}
        </Tag>
    );
};