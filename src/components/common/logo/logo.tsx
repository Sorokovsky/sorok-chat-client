"use client"
import { Avatar } from "@/ui/avatar/avatar";
import type { FC, JSX } from "react";
import { LOGO } from "@/constants/images.constants";
import { useRouter } from "next/navigation";
import { pagesService } from "@/services/pages.service";

export const Logo: FC = (): JSX.Element => {
    const router = useRouter();
    const clickHandler = () => {
        router.push(pagesService.home);
    };
    return (
        <Avatar imageOrPath={LOGO} onClick={clickHandler} />
    );
}