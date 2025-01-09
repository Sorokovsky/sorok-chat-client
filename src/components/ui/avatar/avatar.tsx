import {type FC, type JSX, type MouseEventHandler} from "react";
import Image from "next/image";
import {getAvatarPath} from "@/utils/get-avatar-path";
import styles from "./avatar.module.sass";
import cn from "clsx";
import {DEFAULT_AVATAR_SIZE} from "@/constants/common.constant";

interface Props {
    avatarPath?: string;
    size?: number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    fromServer?: boolean;
    id?: string;
}

export const Avatar: FC<Props> = ({avatarPath = "", size = DEFAULT_AVATAR_SIZE, onClick = (): void => {}, fromServer = true, id}: Props): JSX.Element => {
    return (
      <button
            type={"button"}
            onClick={onClick}
            className={cn(styles.avatar)}
            id={id}
      >
          <Image
              src={fromServer ? getAvatarPath(avatarPath) : avatarPath}
              width={size}
              height={size}
              style={{width: size, height: size}}
              priority
              alt={"avatar"}
          />
      </button>
    );
}