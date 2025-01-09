import { type GetMessage } from "../message/get-message.type";
import { type GetUser } from "../users/get-user.type";
import { type Channel } from "./channel.type";

export type GetChannel = Channel & {
    members: GetUser[];
    messages: GetMessage[];
};