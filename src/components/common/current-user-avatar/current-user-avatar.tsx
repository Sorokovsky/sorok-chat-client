"use client"
import {AVATAR} from "@/constants/images.constants";
import {useProfile} from "@/hooks/api/use-profile.hook";
import {Avatar} from "@/ui/avatar/avatar";
import type {FC, JSX, MouseEventHandler} from "react";
import {Loader} from '@/ui/loader/loader';
import {AVATAR_SIZE} from "@/constants/common.constants";

interface Props {
    onClick?: MouseEventHandler;
    id?: string;
}

export const CurrentUserAvatar: FC<Props> = ({onClick, id}): JSX.Element => {
    const {data, isLoading} = useProfile();
    return (
        <>
            {
                isLoading
                    ?
                    <Loader size={AVATAR_SIZE}/>
                    :
                    <Avatar
                        onClick={onClick}
                        id={id}
                        imageOrPath={data?.avatarPath || AVATAR}
                    />
            }
        </>
    );
};