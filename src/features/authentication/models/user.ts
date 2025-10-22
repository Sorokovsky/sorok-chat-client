import type { Base } from "@/entities";

export type User = Base & {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    macSecret: string;
};