"use client"
import { Header } from "@/components/header/header";
import { MainMenu } from "@/components/main-menu/main-menu";
import { Provider } from "@/components/provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { useSettingsStore } from "@/store/settings/settings.store";
import { type FC, type PropsWithChildren, type JSX } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const isOpen = useSettingsStore(state => state.isOpen);
    return (<html className={"h-full"} lang={"en"} suppressHydrationWarning>
        <body className={"h-full flex flex-col overflow-x-hidden"}>
            <Provider>
                <Header />
                <div className={"flex-grow flex items-stretch relative"}>
                    <Sidebar position="right" isOpen={isOpen}><MainMenu /></Sidebar>
                    <main
                        className="flex-grow"
                    >
                        {children}
                    </main>
                </div>
            </Provider>
        </body>
    </html>);
}