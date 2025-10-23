import { useGetRoutesByAccess } from "../../api";
import type { FC, JSX } from "react";
import { NavigationItem } from "../navigation-item/navigation-item";
import clsx from "classnames";
import styles from "./navigation.module.scss"

export const Navigation: FC = (): JSX.Element => {
    const routes = useGetRoutesByAccess();
    return (
        <ul className={clsx(styles.menu)}>
            {routes.map(route => <NavigationItem key={route.path} route={route} />)}
        </ul>
    );
};