import {type FC, type JSX} from "react";
import {MenuLink} from "@/ui/menu-link/menu-link";
import {LOGIN_ROUTE, LOGOUT_ROUTE, REGISTER_ROUTE} from "@/constants/routes.constant";
import cn from "clsx";
import styles from "./auth-menu.module.sass";
import {useIsAuth} from "@/hooks/use-is-auth.hook";

export const AuthMenu: FC = (): JSX.Element => {
    const isAuth: boolean = useIsAuth();
    return (
        <div className={cn(styles.auth)}>
            {isAuth ? <MenuLink route={LOGOUT_ROUTE} /> : (
                <>
                <MenuLink route={REGISTER_ROUTE}/>
                <MenuLink route={LOGIN_ROUTE}/>
                </>
                )
            }
        </div>
    );
}