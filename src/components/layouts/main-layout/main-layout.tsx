"use client"
import { Header } from "@/commons/header/header";
import { Sidebar } from "@/commons/sidebar/sidebar";
import { GlobalProvider } from "@/providers/global";
import { useUserSettings } from "@/store/user-settings/store";
import type { FC, JSX, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./main-layout.module.sass";
import { useChannelsSidebar } from '@/store/channels-settings/store';

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const settingSidebarState = useUserSettings();
    const channelsSidebarState = useChannelsSidebar();
    return (
        <html lang="uk" suppressHydrationWarning>
            <body>
                <GlobalProvider>
                    <Header />
                    <div
                        className={cn(styles.content)}
                    >
                        <Sidebar position="left" state={channelsSidebarState} />
                        <main>{children}</main>
                        <Sidebar position="right" state={settingSidebarState} />
                    </div>
                </GlobalProvider>
            </body>
        </html>
        
    );
};