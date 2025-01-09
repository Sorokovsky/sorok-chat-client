"use client"
import { Chats } from "@/components/chats/chats";
import { Header } from "@/components/header/header";
import { MainMenu } from "@/components/main-menu/main-menu";
import { Provider } from "@/components/provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { useSettingsStore } from "@/store/settings/settings.store";
import { type FC, type PropsWithChildren, type JSX } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const isOpen = useSettingsStore(state => state.isOpen);
    const close = useSettingsStore(state => state.hide);
    return (
        <html className={"h-full"} lang={"en"} suppressHydrationWarning>
            <body className={"h-full flex flex-col overflow-x-hidden"}>
                <Provider>
                    <Header />
                    <div className={"flex-grow flex items-stretch relative z-1"}>
                        <main
                            className="flex-grow"
                        >
                            <Sidebar
                                position="left"
                                isOpen={true}
                            >
                            <Chats />
                        </Sidebar>
                            {children}
                            <Sidebar
                                position="right"
                                isOpen={isOpen}
                                close={close}
                                closerSelector="#avatar"
                            >
                            <MainMenu />
                        </Sidebar>
                        </main>
                    </div>
                </Provider>
            </body>
        </html>
    );
}