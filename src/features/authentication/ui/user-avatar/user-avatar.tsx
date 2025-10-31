import type {FC, JSX} from "react";
import {Avatar, IconButton} from "@mui/material";
import {useGetProfile, User, useUserMenuStore} from "@/features/authentication";
import clsx from "clsx";
import styles from "./user-avatar.module.scss";
import {UserMenu} from "@/features/authentication/ui/user-menu/user-menu";

function formatUserName(user: User): string {
    return `${user.firstName[0]}.${user.middleName[0]}.`;
}

export const UserAvatar: FC = (): JSX.Element => {
    const {data: user} = useGetProfile();
    const toggleUserMenu = useUserMenuStore(state => state.toggle);
    return (
        <>
            <IconButton onClick={toggleUserMenu} className={clsx(styles.avatar)}>
                <Avatar>{user && formatUserName(user)}</Avatar>
                <UserMenu/>
            </IconButton>
        </>
    )
}