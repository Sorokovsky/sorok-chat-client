import { type GetUser } from "../users/get-user.type";
import { type Message } from "./message.type";

export type GetMessage = Message & {
    author: GetUser;
}