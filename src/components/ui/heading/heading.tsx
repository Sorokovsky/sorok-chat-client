import {type FC, type JSX, type ReactNode} from "react";
import {type HeadingTags} from "@/enums/heading-tags.enum";
import cn from "clsx";
import styles from "./heading.module.sass";

interface Props {
 tag: HeadingTags;
 children: ReactNode;
 className?: string;
}

export const Heading: FC<Props> = ({tag, children, className}: Props): JSX.Element => {
     const CustomTag = tag as keyof JSX.IntrinsicElements;
     return (
         <CustomTag
             className={cn(styles.heading, className)}
         >
             {children}
         </CustomTag>
     )
}