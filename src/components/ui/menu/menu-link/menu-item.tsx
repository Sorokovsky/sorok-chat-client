import {type FC, JSX} from "react";
import {type Route} from "@/types/route.type";
import Link from "next/link";
import cn from "clsx";
import {DEFAULT_ICON_COLOR, ICON_SIZE} from "@/constants/common.constant";
import styles from "./menu-item.module.sass";

interface Props {
    route: Route,
    color?: string
}
export const MenuItem: FC<Props> = ({route, color = DEFAULT_ICON_COLOR}: Props): JSX.Element => {
    return (
        <li
            className={cn(styles.item)}
        >
            <Link
                href={route.to}
                className={cn(styles.link)}
            >
                    <route.icon color={color} size={ICON_SIZE} />
                    <p>{route.title}</p>
            </Link>
        </ li>
    );
}