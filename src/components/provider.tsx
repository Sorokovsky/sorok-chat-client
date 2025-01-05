"use client"
import {type FC, JSX, type PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast";

export const Provider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const [queryClient] = useState((): QueryClient => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retryOnMount: false,
            }
        }
    }));
    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}