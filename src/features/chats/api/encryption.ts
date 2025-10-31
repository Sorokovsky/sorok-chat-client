import {DES, enc, mode, pad} from "crypto-js";

const config = {
    mode: mode.CBC,
    padding: pad.Pkcs7
};

export function encrypt(text: string, encryptionKey: string): string {
    return DES.encrypt(text, encryptionKey, config).toString();
}

export function decrypt(encryptedText: string, encryptionKey: string): string {
    const decrypted = DES.decrypt(encryptedText, encryptionKey, config);
    return decrypted.toString(enc.Utf8);
}