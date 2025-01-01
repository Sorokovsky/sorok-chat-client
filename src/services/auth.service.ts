import {LoginUser} from "@/types/models/auth/login.type";
import {api} from "@/utils/api";
import {AxiosResponse} from "axios";

class AuthService {
    private readonly baseUrl = '/auth';
    private readonly loginUrl = `${this.baseUrl}/login`;
    public async login(login: LoginUser): Promise<void> {
        const response: AxiosResponse<void> = await api.patch(this.loginUrl, login, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
}
export const authService = new AuthService();