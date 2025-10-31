import type {FC, JSX} from "react";
import {ChatsSidebarToggle} from "@/features/chats";
import {Avatar} from "@mui/material";
import {Link, useLocation} from "react-router";
import {HOME_ROUTE} from "@/shared";
import {UserAvatar} from "@/features/authentication";

export const Navigation: FC = (): JSX.Element => {
    const {pathname} = useLocation();
    return (
        <>
            {pathname === HOME_ROUTE.path && <ChatsSidebarToggle/>}
            <Link to={HOME_ROUTE.path}>
                <Avatar src={"/logo.svg"}/>
            </Link>
            <UserAvatar/>
        </>
    );
};