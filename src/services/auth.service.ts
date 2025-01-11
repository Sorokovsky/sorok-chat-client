import type { Auth } from "@/types/models/auth/auth.type";
import type { CreateUser } from "@/types/models/user/create-user.type";
import type { GetUser } from "@/types/models/user/get-uset.type";
import api from "@/utils/api";

class AuthService {
    private readonly baseUrl: string = "/auth";
    private readonly registerUrl: string = `${this.baseUrl}/register`;
    private readonly loginUrl: string = `${this.baseUrl}/login`;
    private readonly logoutUrl: string = `${this.baseUrl}/logout`;

    public async register(registerDto: CreateUser): Promise<GetUser> {
        const response = await api.post<GetUser>(this.registerUrl, registerDto);
        return response.data;
    };

    public async login(loignDto: Auth): Promise<void> {
        const response = await api.patch(this.loginUrl, loignDto);
        return response.data;
    }

    public async logout(): Promise<void> {
        const response = await api.delete(this.logoutUrl);
        return response.data;
    }
};
export const authService = new AuthService();