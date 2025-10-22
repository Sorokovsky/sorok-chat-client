import type { FC, JSX } from "react";
import { RouterProvider } from "./router";
import { QueryProvider } from "./query";

export const Providers: FC = (): JSX.Element => {
    return (
        <QueryProvider>
                <RouterProvider />
        </QueryProvider>
    );
};