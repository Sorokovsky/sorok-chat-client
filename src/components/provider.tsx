"use client"
import {type FC, type JSX, type PropsWithChildren, useState} from "react";
import {QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, {Toaster} from "react-hot-toast";
import {NOTIFICATION_DURATION_MILLISECONDS} from "@/constants/common.constant";

export const Provider: FC<PropsWithChildren> = ({ children }: PropsWithChildren): JSX.Element => {
    const [queryClient] = useState((): QueryClient => new QueryClient({
        queryCache: new QueryCache({
            onError(error) {
                toast.error(error.message);
            }
        }),
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retryOnMount: false,
            }
        },
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