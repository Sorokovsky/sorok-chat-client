import {HmacSHA256} from "crypto-js";

import type { Message } from "../models";

export function isMessageNotChanged(message: Message): boolean {
    const signedMessage = signMessage(message);
    return message.mac === signedMessage.mac;
};

export function signMessage(message: Message): Message {
    const newMessage = { ...message, mac: HmacSHA256(message.text, message.author.macSecret).toString() };
    return newMessage;

};