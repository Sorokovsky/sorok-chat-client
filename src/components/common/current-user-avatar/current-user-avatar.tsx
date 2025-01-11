"use client"
import { AVATAR } from "@/constants/images.constants";
import { useProfile } from "@/hooks/api/use-profile.hook";
import { Avatar } from "@/ui/avatar/avatar";
import type { FC, JSX, MouseEventHandler } from "react";

interface Props {
    onClick?: MouseEventHandler;
}

export const CurrentUserAvatar: FC<Props> = ({ onClick }): JSX.Element => {
    const { data } = useProfile();
    return <Avatar
        onClick={onClick}
        imageOrPath={data?.avatarPath || AVATAR}
    />
};