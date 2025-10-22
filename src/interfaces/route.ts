import { ReactNode } from "react";
import { AccessRule } from './access-rule';

export type Route = {
    path: string;
    name: string;
    element: ReactNode;
    accessRule: AccessRule;
};