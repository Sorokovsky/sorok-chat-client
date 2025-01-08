"use client"
import { Header } from "@/components/header/header";
import { Provider } from "@/components/provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { useSettingsStore } from "@/store/settings/settings.store";
import { type FC, type PropsWithChildren, type JSX } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const { isOpen } = useSettingsStore();
    return (<html className={"h-full"} lang={"en"} suppressHydrationWarning>
        <body className={"h-full flex flex-col"}>
            <Provider>
                <Header />
                <div className={"flex-grow flex items-stretch relative"}>
                    <Sidebar isOpen={isOpen}>sidebar</Sidebar>
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