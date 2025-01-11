import { Header } from "@/commons/header/header";
import { GlobalProvider } from "@/providers/global";
import type { FC, JSX, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <html lang="uk" suppressHydrationWarning>
            <body>
                <GlobalProvider>
                    <Header />
                    <main>{children}</main>
                </GlobalProvider>
            </body>
        </html>
        
    );
};