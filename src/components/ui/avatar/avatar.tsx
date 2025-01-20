import {AVATAR_SIZE} from "@/constants/common.constants";
import type {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import type {FC, JSX, MouseEventHandler} from "react";
import cn from "clsx";
import styles from "./avatar.module.sass";
import {getAvatar} from "@/utils/get-avatar.util";

interface Props {
    fromServer?: boolean;
    imageOrPath: string | StaticImport;
    onClick?: MouseEventHandler;
    alt?: string;
    size?: number;
    id?: string;
}
export const Avatar: FC<Props> = ({
                                      imageOrPath,
                                      onClick,
                                      fromServer = true,
                                      alt = "avatar",
                                      size = AVATAR_SIZE,
                                      id
                                  }): JSX.Element => {
    return (
        <button
            type="button"
            style={{
                width: size,
                height: size,
            }}
            onClick={onClick}
            className={cn(styles.avatar)}
            id={id}
        >
            <Image
                src={getAvatar(imageOrPath, fromServer)}
                width={size}
                height={size}
                alt={alt}
                priority
            />
        </button>
    );
};