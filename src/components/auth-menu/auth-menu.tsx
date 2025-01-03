import {type FC, type JSX} from "react";
import {MenuLink} from "@/ui/menu-link/menu-link";
import {LOGIN_ROUTE, LOGOUT_ROUTE, REGISTER_ROUTE} from "@/constants/routes.constant";
import {useProfile} from "@/hooks/use-profile.hook";

export const AuthMenu: FC = (): JSX.Element => {
    const {data} = useProfile();
    return (
        <div className="flex items-center justify-between gap-2">
            {data !== undefined ? <MenuLink route={LOGOUT_ROUTE} /> : (
                <>
                <MenuLink route={REGISTER_ROUTE}/>
                <MenuLink route={LOGIN_ROUTE}/>
                </>
                )
            }
        </div>
    );
}