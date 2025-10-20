"use client"
import {NextPage} from "next";
import {JSX, useEffect} from "react";
import {useLogout} from "@/hooks/logout.hook";

const Logout: NextPage = (): JSX.Element => {
    const { mutate: logout } = useLogout();
    useEffect(() => {
        logout();
    }, []);
    return (
        <></>
    );
};

export default Logout;