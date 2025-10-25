import { AppBar, Toolbar } from "@mui/material";
import type { FC, JSX } from "react";
import clsx from "classnames";
import styles from "./header.module.scss";
import { Navigation } from "@/shared";
import { useGetProfile, User } from "@/features/authentication";

function formatUserName(user: User): string {
    return `${user.lastName} ${user.firstName[0]}.${user.middleName[0]}.`;
}

export const Header: FC = (): JSX.Element => {
    const { data: user } = useGetProfile();
    return (
        <AppBar
            position="sticky"
            component={"header"}
        >
            <Toolbar
                className={clsx(styles.container)}
            >
                <Navigation />
                {user && <p>{formatUserName(user)}</p>}
            </Toolbar>
        </AppBar>
    );
};