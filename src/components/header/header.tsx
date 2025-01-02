"use client"
import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import {useProfile} from "@/hooks/use-profile.hook";
import {Avatar} from "@/components/avatar/avatar";
import {useLogout} from "@/hooks/use-logout";

export const Header: FC = (): JSX.Element => {
    const { data } = useProfile();
    const { mutate: logout } = useLogout();
    return (
        <header
            className={cn(styles.header)}
        >
            <Avatar onClick={() => logout()} avatarPath={data?.avatarPath} />
        </header>
    );
}