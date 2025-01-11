"use client"
import { Avatar } from "@/ui/avatar/avatar";
import type { FC, JSX, MouseEventHandler } from "react";
import { LOGO } from "@/constants/images.constants";
import { useRouter } from "next/navigation";
import { pagesService } from "@/services/pages.service";

interface Props {
    onClick?: MouseEventHandler;
    id?: string;
}

export const Logo: FC<Props> = ({onClick, id}): JSX.Element => {
    const router = useRouter();
    const clickHandler = () => {
        router.push(pagesService.home);
    };
    return (
        <Avatar imageOrPath={LOGO} onClick={onClick || clickHandler} id={id} />
    );
}