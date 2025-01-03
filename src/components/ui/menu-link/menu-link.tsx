import {type FC, JSX} from "react";
import {type Route} from "@/types/route.type";
import Link from "next/link";
import {ICON_SIZE} from "@/constants/common.constant";

interface Props {
    route: Route
}
export const MenuLink: FC<Props> = ({route}: Props): JSX.Element => {
    return (
        <>
            <Link href={route.to}>
                <route.icon size={ICON_SIZE} />
            </Link>
        </>
    );
}