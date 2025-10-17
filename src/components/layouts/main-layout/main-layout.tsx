import {FC, JSX, PropsWithChildren} from "react";
import "./main-layout.scss";

export const MainLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
};