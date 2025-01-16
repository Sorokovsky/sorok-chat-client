import type {Metadata} from "next";
import "@/styles/globals.sass";
import {DESCRIPTION, TITLE_DEFAULT, TITLE_TEMPLATE} from "@/constants/seo.constants";
import type {FC, JSX, PropsWithChildren} from "react";
import {MainLayout} from "@/layouts/main-layout/main-layout";

export const metadata: Metadata = {
    title: {
        template: TITLE_TEMPLATE,
        default: TITLE_DEFAULT,
    },
    description: DESCRIPTION,
};

const RootLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren): JSX.Element => {
    return (<MainLayout>{children}</MainLayout>);
}
export default RootLayout;
