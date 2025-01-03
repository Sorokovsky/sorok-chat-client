import {type FC, JSX} from "react";
import {type Route} from "@/types/route.type";
import Link from "next/link";
import cn from "clsx";
import {DEFAULT_ICON_COLOR, ICON_SIZE} from "@/constants/common.constant";
import styles from "./menu-link.module.sass";

interface Props {
    route: Route,
    color?: string
}
export const MenuLink: FC<Props> = ({route, color = DEFAULT_ICON_COLOR}: Props): JSX.Element => {
    return (
        <>
            <Link
                href={route.to}
                className={cn(styles.link)}
            >
                <route.icon color={color} size={ICON_SIZE} />
            </Link>
        </>
    );
}