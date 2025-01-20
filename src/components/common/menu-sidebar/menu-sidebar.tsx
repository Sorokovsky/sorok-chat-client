"use client"
import {type FC, JSX} from "react";
import {AuthMenu} from "@/commons/auth-menu/auth-menu";
import {Sidebar} from "@/commons/sidebar/sidebar";
import {useUserSettings} from "@/store/user-settings/store";

export const MenuSidebar: FC = (): JSX.Element => {
    const settingIsOpen = useUserSettings(state => state.isOpen);
    return (
        <Sidebar position="right" isOpen={settingIsOpen}>
            <AuthMenu/>
        </Sidebar>
    );
};