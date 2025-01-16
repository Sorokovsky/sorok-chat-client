"use client"
import {Header} from "@/commons/header/header";
import {Sidebar} from "@/commons/sidebar/sidebar";
import {GlobalProvider} from "@/providers/global";
import {useUserSettings} from "@/store/user-settings/store";
import type {FC, JSX, PropsWithChildren} from "react";
import cn from "clsx";
import styles from "./main-layout.module.sass";
import {useChannelsSidebar} from '@/store/channels-settings/store';
import {Link} from "@/ui/link/link";

export const MainLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    const settingIsOpen = useUserSettings(state => state.isOpen);
    const channelsIsOpen = useChannelsSidebar(state => state.isOpen);
    return (
        <html lang="uk" suppressHydrationWarning>
        <body>
        <GlobalProvider>
            <Header/>
            <div
                className={cn(styles.content)}
            >
                <Sidebar position="left" isOpen={channelsIsOpen}>
                    <Link
                        to={"/test"}
                    >
                        test
                    </Link>
                </Sidebar>
                <main>{children}</main>
                <Sidebar position="right" isOpen={settingIsOpen}>
                    <Link
                        to={"/test"}
                    >
                        test
                    </Link>
                </Sidebar>
            </div>
        </GlobalProvider>
        </body>
        </html>
    );
};