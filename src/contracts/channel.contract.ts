import {Base} from "@/contracts/base.contract";
import {User} from "@/contracts/user.contract";

export type Channel = Base & {
    name: string;
    description: string;
    members: User[];
    message: string;
};