import {HOME_TITLE} from "@/constants/seo.constants";
import {HomePage} from "@/pages/home/home";
import type {Metadata, NextPage} from "next";
import type {JSX} from "react";

export const metadata: Metadata = {
    title: HOME_TITLE
};

const Home: NextPage = (): JSX.Element => <HomePage/>;

export default Home;
