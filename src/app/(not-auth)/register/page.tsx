import {type Metadata, type NextPage} from "next";
import {type JSX} from "react";
import { RegisterPage } from "@/components/pages/register/register";

export const metadata: Metadata = {
    title: "Register",
}

const Register: NextPage = (): JSX.Element => {
   return <RegisterPage />
}
export default Register;