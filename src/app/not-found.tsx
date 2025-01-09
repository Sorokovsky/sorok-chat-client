import { type NextPage } from "next";
import { type JSX } from "react";

const NotFound: NextPage = (): JSX.Element => {
    return (
        <div className="center font-bold text-5xl">
            Not found. 404
        </div>
    );
};
export default NotFound;