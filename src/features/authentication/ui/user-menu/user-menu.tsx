import type {FC, JSX} from "react";
import {LOGIN_ROUTE, LOGOUT_ROUTE, NavigationItem, REGISTRATION_ROUTE, useGetRoutesByAccess} from "@/shared";
import clsx from "clsx";
import styles from "./user-menu.module.scss";
import {useUserMenuStore} from "@/features/authentication";

export const UserMenu: FC = (): JSX.Element => {
    const items = useGetRoutesByAccess([REGISTRATION_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE]);
    const isOpen = useUserMenuStore(state => state.isOpen);
    return (
        <div className={clsx(styles.menu, {
            [styles.open]: isOpen,
        })}>
            <ul>
                {items.map((item) => {
                    return <NavigationItem key={item.path} route={item}/>
                })}
            </ul>
        </div>
    );
}