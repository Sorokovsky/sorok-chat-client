import {type FC, type JSX} from "react";
import type {MenuRoute} from "@/types/routes/menu-route.type";
import {Link} from "@/ui/link/link";
import {ICON_SIZE} from "@/constants/common.constants";
import cn from "clsx";
import styles from "./menu-item.module.sass";

interface Props {
    item: MenuRoute;
}

export const MenuItem: FC<Props> = ({item}): JSX.Element => {
    return (
        <li>
            <Link
                to={item.path}
                className={cn(styles.link)}
            >
                <item.icon size={ICON_SIZE}/>
                <span>{item.title}</span>
            </Link>
        </li>
    );
};