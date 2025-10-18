"use client"
import {FC, JSX, PropsWithChildren} from "react";
import "./main-layout.scss";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider} from "@chakra-ui/react"

const queryClient: QueryClient = new QueryClient();

export const MainLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider>
                        {children}
                    </ChakraProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
};