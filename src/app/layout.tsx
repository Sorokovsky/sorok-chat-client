import {FC, JSX, PropsWithChildren} from "react";
import {MainLayout} from "@/layouts/main-layout/main-layout";

const RootLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
}

export default RootLayout;