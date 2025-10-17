import {FC, JSX, PropsWithChildren} from "react";

const RootLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <html lang="en">
            {children}
        </html>
    );
}

export default RootLayout;