"use client"
import { FC, JSX, PropsWithChildren } from "react";
import "./main-layout.scss";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Header } from "@/components/header/header";

const queryClient: QueryClient = new QueryClient();

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <html lang="uk" suppressHydrationWarning>
            <body>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
};