import { LoginPage } from "@/components/pages/login/login";
import {type Metadata, type NextPage} from "next";
import { type JSX } from "react";

export const metadata: Metadata = {
    title: "Login"
}

const Login: NextPage = (): JSX.Element => {
    return <LoginPage />
}
export default Login;