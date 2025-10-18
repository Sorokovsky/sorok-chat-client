"use client"
import {FC, JSX, PropsWithChildren} from "react";
import "./main-layout.scss";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient: QueryClient = new QueryClient();

export const MainLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    );
};