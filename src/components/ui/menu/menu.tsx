import { type JSX, type FC } from "react";
import { type Route } from '@/types/route.type';
import { MenuItem } from "@/components/ui/menu/menu-link/menu-item";

interface Props {
    menu: Route[];
}

export const Menu: FC<Props> = ({menu}): JSX.Element => {
    return (
        <nav>
            <ul>
                {menu.map(item => <MenuItem key={item.to} route={item} />)}
            </ul>
        </nav>
    );
}