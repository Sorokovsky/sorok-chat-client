import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, JSX, PropsWithChildren } from "react";

const client: QueryClient = new QueryClient();

export const QueryProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
};