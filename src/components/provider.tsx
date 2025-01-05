"use client"
import {type FC, type JSX, type PropsWithChildren, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast";
import {NOTIFICATION_DURATION_MILLISECONDS} from "@/constants/common.constant";

export const Provider: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
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
                toastOptions={{
                    duration: NOTIFICATION_DURATION_MILLISECONDS,
                }}
            />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}