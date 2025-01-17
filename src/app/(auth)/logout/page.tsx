import type {Metadata, NextPage} from "next";
import {type JSX} from "react";
import {LogoutPage} from "@/pages/logout/logout";
import {LOGOUT_TITLE} from "@/constants/seo.constants";

export const metadata: Metadata = {
    title: LOGOUT_TITLE
};

const Logout: NextPage = (): JSX.Element => {
    return <LogoutPage/>
};
export default Logout;