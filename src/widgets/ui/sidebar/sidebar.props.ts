import type {PropsWithChildren} from "react";
import type {Position} from "@/widgets/types";

export interface SidebarProps extends PropsWithChildren {
    position?: Position
    isOpen?: boolean;
}