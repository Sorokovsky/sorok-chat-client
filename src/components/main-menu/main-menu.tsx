import { type JSX, type FC, useState, useEffect } from "react";
import { useIsAuth } from '@/hooks/use-is-auth.hook';
import { type Route } from '@/types/route.type';
import { FOR_ALL } from '@/constants/routes.constant';
import { Menu } from "@/ui/menu/menu";
import { FOR_AUTH, FOR_NOT_AUTH } from '@/constants/routes.constant';

export const MainMenu: FC = (): JSX.Element => {
    const { isAuth } = useIsAuth();
    const [menu, setMenu] = useState<Route[]>(FOR_ALL);
    useEffect(() => {
        const extraMenu: Route[] = isAuth ? FOR_AUTH : FOR_NOT_AUTH;
        setMenu([...FOR_ALL, ...extraMenu]);
    }, [isAuth])
    return <Menu menu={menu} />
}