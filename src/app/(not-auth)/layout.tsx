import {type FC, type JSX, type PropsWithChildren} from "react";
import {NotAuthLayout} from "@/layouts/not-auth-layout/not-auth-layout";

const NotAuth: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <NotAuthLayout>{children}</NotAuthLayout>
    );
};

export default NotAuth;