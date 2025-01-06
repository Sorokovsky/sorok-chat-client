import {type Metadata, type NextPage} from "next";
import {type JSX} from "react";
import { LogoutPage } from "@/components/pages/logout/logout";

export const metadata: Metadata = {
    title: "Logout",
}

const Logout: NextPage = (): JSX.Element => {
    return <LogoutPage />
}
export default Logout;