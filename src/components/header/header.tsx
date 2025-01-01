"use client"
import {type FC, type JSX, useEffect, useState} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import Image from "next/image";
import {useProfile} from "@/hooks/use-profile.hook";

export const Header: FC<{server: string}> = ({server}): JSX.Element => {
    const { data } = useProfile();
    const [path, setPath] = useState<string | undefined>(undefined);
    useEffect(() => {
        if(data?.avatarPath !== undefined) {
            setPath(server + "/" + data?.avatarPath);
        }
    }, [data]);
    return (
        <header
            className={cn(styles.header)}
        >
            {path && <Image src={path} alt={"avatar"} width={50} height={50} priority />}
        </header>
    );
}