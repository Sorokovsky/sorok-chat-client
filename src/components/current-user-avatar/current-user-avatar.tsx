"use client"
import { type FC, type JSX} from "react";
import {Avatar} from "@/ui/avatar/avatar";
import {useProfile} from "@/hooks/use-profile.hook";

export const CurrentUserAvatar: FC = (): JSX.Element => {
    const {data} = useProfile();
    return (
        <Avatar avatarPath={data?.avatarPath} />
    )
}