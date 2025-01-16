import type {FC, JSX} from "react";
import {LoaderCircle} from "lucide-react";
import {ICON_SIZE} from '@/constants/common.constants';
import cn from 'clsx';
import styles from "./loader.module.sass";

interface Props {
    size?: number;
};

export const Loader: FC<Props> = ({size = ICON_SIZE}): JSX.Element => {
    return (
        <LoaderCircle className={cn(styles.loader)} size={size}/>
    );
};