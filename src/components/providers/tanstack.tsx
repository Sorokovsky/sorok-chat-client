'use client'
import {QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {type FC, type JSX, type PropsWithChildren, useState} from "react";
import {toast} from "react-toastify";

export const TanstackProvider: FC<PropsWithChildren> = ({children}): JSX.Element => {
    const [client] = useState<QueryClient>(() => new QueryClient({
        queryCache: new QueryCache({
            onError(error) {
                toast.error(error.message);
            }
        }),
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