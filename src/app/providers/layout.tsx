import { Header } from "@/widgets/ui";
import type { FC, JSX, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};