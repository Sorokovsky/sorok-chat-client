import {HmacSHA256} from "crypto-js";

import type { Message } from "../models";

export function isMessageNotChanged(message: Message): boolean {
    const newMac = signMessage(message.text, message.author.macSecret);
    return message.mac === newMac;
};

export function signMessage(message: string, macSercet: string): string {
    return HmacSHA256(message, macSercet).toString();
};