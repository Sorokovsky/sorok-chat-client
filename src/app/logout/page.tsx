"use client"
import {NextPage} from "next";
import {JSX, useEffect} from "react";
import {useLogout} from "@/hooks/logout.hook";
import { useFilterAccess } from "@/hooks/use-filter-access.hook";

const Logout: NextPage = (): JSX.Element => {
    const { mutate: logout } = useLogout();
    useFilterAccess(true);
    useEffect(() => {
        logout();
    }, []);
    return (
        <></>
    );
};

export default Logout;