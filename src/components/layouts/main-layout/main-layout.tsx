"use client"
import { Header } from "@/components/header/header";
import { Provider } from "@/components/provider";
import { type FC, type PropsWithChildren, type JSX } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (<html className={"h-full"} lang={"en"} suppressHydrationWarning>
        <body className={"h-full flex flex-col"}>
            <Provider>
                <Header />
                <div className={"flex-grow"}>
                    {children}
                </div>
            </Provider>
        </body>
    </html>);
}