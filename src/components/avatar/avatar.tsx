import {type FC, type JSX} from "react";
import Image from "next/image";
import {getAvatarPath} from "@/utils/get-avatar-path";
import styles from "./avatar.module.sass";
import cn from "clsx";
import {DEFAULT_AVATAR_SIZE} from "@/constants/common.constant";

interface Props {
    avatarPath?: string,
    size?: number
}

export const Avatar: FC<Props> = ({avatarPath = "", size = DEFAULT_AVATAR_SIZE}: Props): JSX.Element => {
    return (
      <Image
          src={getAvatarPath(avatarPath)}
          width={size}
          height={size}
          style={{width: size, height: size}}
          priority
          alt={"avatar"}
          className={cn(styles.avatar)}
      />
    );
}