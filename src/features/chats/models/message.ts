import type { Base } from "@/entities";
import { type User } from "@/features/authentication";

export type Message = Base & {
    text: string;
    mac: string;
    author: User;
};