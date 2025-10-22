import { AppBar, Toolbar } from "@mui/material";
import type { FC, JSX } from "react";
import clsx from "classnames";
import styles from "./header.module.scss";
import { Navigation } from "@/shared";

export const Header: FC = (): JSX.Element => {
    return (
        <AppBar
            position="sticky"
            component={"header"}
        >
            <Toolbar
                className={clsx(styles.container)}
            >
                <Navigation />
            </Toolbar>
        </AppBar>
    );
};