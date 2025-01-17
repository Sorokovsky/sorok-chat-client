import {type FC, type JSX, type PropsWithChildren} from "react";
import {ForAuthLayout} from "@/layouts/for-auth-layout/for-auth-layout";

const ForAuth: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return <ForAuthLayout>{children}</ForAuthLayout>;
};
export default ForAuth;