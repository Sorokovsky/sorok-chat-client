'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {type FC, type JSX, type PropsWithChildren, useState} from "react";

export const TanstackProvider: FC<PropsWithChildren> = ({children}): JSX.Element => {
    const [client] = useState<QueryClient>(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnMount: false,
                refetchOnWindowFocus: false,
            },
        },
    }));
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools client={client} initialIsOpen={false}/>
        </ QueryClientProvider>
    );
};