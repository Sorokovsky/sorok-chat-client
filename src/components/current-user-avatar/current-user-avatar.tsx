"use client"
import {type MouseEventHandler, type FC, type JSX} from "react";
import {Avatar} from "@/ui/avatar/avatar";
import {useProfile} from "@/hooks/use-profile.hook";
import {Loader} from "@/ui/loader/loader";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CurrentUserAvatar: FC<Props> = ({onClick = () => {}}): JSX.Element => {
    const {data, isPending} = useProfile();
    return (
        <>
            {isPending ? <Loader /> : <Avatar avatarPath={data?.avatarPath} onClick={onClick} />}
        </>
    )
}