import { type PropsWithChildren, type FC, type JSX } from "react";
import { useForAuth } from '@/hooks/use-for-auth.hook';

const AuthLayout: FC<Readonly<PropsWithChildren>> = ({ children }): JSX.Element => {
    useForAuth();
    return <>{children}</>;
}
export default AuthLayout;