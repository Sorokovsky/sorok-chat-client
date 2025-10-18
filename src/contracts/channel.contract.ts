import {Base} from "@/contracts/base.contract";
import {User} from "@/contracts/user.contract";
import { Message } from "./message.contract";

export type Channel = Base & {
    name: string;
    description: string;
    members: User[];
    messages: Message[];
};