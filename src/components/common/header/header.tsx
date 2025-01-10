import type { FC, JSX } from "react";
import cn from "clsx";
import styles from "./header.module.sass";
import { AVATAR, LOGO } from "@/constants/images.constants";
import { Avatar } from "@/ui/avatar/avatar";

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        >
            <Avatar
                imageOrPath={LOGO}
            />
            <Avatar
                imageOrPath={AVATAR}
            />
        </header>
    );
};