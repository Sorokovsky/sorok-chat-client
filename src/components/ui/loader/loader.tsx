import {type FC, JSX} from "react";
import {LoaderCircle} from "lucide-react";
import {DEFAULT_AVATAR_SIZE} from "@/constants/common.constant";
import cn from "clsx";
import styles from "./loader.module.sass";

export const Loader: FC = (): JSX.Element => {
    return (
        <>
            <LoaderCircle className={cn(styles.loader)} size={DEFAULT_AVATAR_SIZE} />
        </>
    );
}