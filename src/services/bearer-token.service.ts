import { ACCESS_TOKEN_KEY } from "@/constants/api.constants";

class BearerTokenService {
    private readonly key: string;
    
    constructor(key: string) {
        this.key = key;
    }

    public get(): string {
        return localStorage.getItem(this.key) || "";
    }

    public set(token: string): void {
        localStorage.setItem(this.key, token);
    }

    public clear(): void {
        localStorage.removeItem(this.key);
    }
};

export const bearerTokenService = new BearerTokenService(ACCESS_TOKEN_KEY);