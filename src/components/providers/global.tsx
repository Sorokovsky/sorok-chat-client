import type { FC, JSX, PropsWithChildren } from "react";
import { TanstackProvider } from "./tanstack";

export const GlobalProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <TanstackProvider>
            {children}
        </TanstackProvider>
    );
};