import { Typography } from "@mui/material";
import { type FC, type JSX, useEffect } from "react";
import { useIsAuthenticated, useLogout } from '@/features/authentication';

export const LogoutPage: FC = (): JSX.Element => {
    const isAuthenticated = useIsAuthenticated();
    const { mutate: logout } = useLogout();
    useEffect(() => {
        if (isAuthenticated) {
            logout();
        }
    }, [isAuthenticated]);
    return (
        <Typography>Вихід</Typography>
    );
};