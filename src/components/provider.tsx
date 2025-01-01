"use client"
import {type FC, JSX, type PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Provider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const [queryClient] = useState((): QueryClient => new QueryClient());
    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}