import type {FC, JSX, PropsWithChildren} from "react";
import {TanstackProvider} from "./tanstack";
import {ToastContainer} from "react-toastify";
import {NOTIFICATION_DURATION} from "@/constants/common.constants";

export const GlobalProvider: FC<PropsWithChildren> = ({children}): JSX.Element => {
    return (
        <TanstackProvider>
            {children}
            <ToastContainer
                position={"top-center"}
                theme={"colored"}
                autoClose={NOTIFICATION_DURATION}
            />
        </TanstackProvider>
    );
};