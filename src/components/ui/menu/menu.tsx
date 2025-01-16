import {type FC, type JSX} from "react";
import type {MenuRoute} from "@/types/routes/menu-route.type";
import {MenuItem} from "@/ui/menu/menu-item/menu-item";

interface Props {
    menu: MenuRoute[];
}

export const Menu: FC<Props> = ({menu}): JSX.Element => {
    return (
        <nav>
            <ul>
                {menu.map(item => <MenuItem item={item} key={item.path}/>)}
            </ul>
        </nav>
    );
};