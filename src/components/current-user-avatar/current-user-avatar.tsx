"use client"
import { type FC, type JSX} from "react";
import {Avatar} from "@/ui/avatar/avatar";
import {useProfile} from "@/hooks/use-profile.hook";
import {Loader} from "@/ui/loader/loader";

export const CurrentUserAvatar: FC = (): JSX.Element => {
    const {data, isPending} = useProfile();
    return (
        <>
            {isPending ? <Loader /> : <Avatar avatarPath={data?.avatarPath}/>}
        </>
    )
}