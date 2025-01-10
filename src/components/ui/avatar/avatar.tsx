import { AVATAR_SIZE } from "@/constants/common.constants";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import type { FC, JSX, MouseEventHandler } from "react";
import cn from "clsx";
import styles from "./avatar.module.sass";

interface Props {
    fromServer?: boolean;
    imageOrPath: string | StaticImport;
    onClick?: MouseEventHandler;
    alt?: string;
    size?: number;
};
export const Avatar: FC<Props> = ({
    imageOrPath,
    onClick,
    fromServer = true,
    alt = "avatar",
    size = AVATAR_SIZE
}): JSX.Element => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(styles.avatar)}
        >
            <Image
                src={imageOrPath}
                width={size}
                height={size}
                alt={alt}
            />
        </button>
    );
};