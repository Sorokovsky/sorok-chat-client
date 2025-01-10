import { Header } from "@/commons/header/header";
import type { FC, JSX, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
};