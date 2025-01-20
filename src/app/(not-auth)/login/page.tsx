import type {Metadata, NextPage} from "next";
import {JSX} from "react";
import {LoginPage} from "@/pages/login/login";
import {LOGIN_TITLE} from "@/constants/seo.constants";

export const metadata: Metadata = {
    title: LOGIN_TITLE
}

const Login: NextPage = (): JSX.Element => {
    return <LoginPage/>;
};

export default Login;