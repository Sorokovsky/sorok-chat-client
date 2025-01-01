import {ACCESS_TOKEN_KEY} from "@/constants/common.constant";

class AccessTokenStorageService {
    public get(): string | null {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    public set(token: string): void {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }

    public delete(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
}
export const accessTokenStorageService = new AccessTokenStorageService();