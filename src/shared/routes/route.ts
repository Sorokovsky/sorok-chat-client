import { ReactNode } from "react";
import { AccessRule } from '@/features/authentication';

export type Route = {
    path: string;
    name: string;
    element: ReactNode;
    accessRule: AccessRule;
};