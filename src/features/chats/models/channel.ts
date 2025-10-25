import { type Base } from "@/entities";
import { type User } from "@/features/authentication";
import { type Message } from "./message";

export type Channel = Base & {
    name: string;
    description: string;
    members: User[];
    message: Message[];
};