import {Base} from "@/contracts/base.contract";
import {User} from "@/contracts/user.contract";

export type Message = Base & {
    author: User;
    text: string;
    mac: string
};