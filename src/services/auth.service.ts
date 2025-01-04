import {type LoginUser} from "@/types/models/auth/login.type";
import {api} from "@/utils/api";
import {type AxiosResponse} from "axios";
import {type Register} from "@/types/models/auth/register.type";
import {type GetUser} from "@/types/models/users/get-user.type";
import toast from "react-hot-toast";

class AuthService {
    private readonly baseUrl: string = '/auth';
    private readonly loginUrl: string = `${this.baseUrl}/login`;
    private readonly registerUrl: string = `${this.baseUrl}/register`;
    private readonly logoutUrl: string = `${this.baseUrl}/logout`;
    public async login(login: LoginUser): Promise<void> {
        const loading: string = toast.loading("Logining...");
        const response: AxiosResponse<void> = await api.patch(this.loginUrl, login);
        toast.dismiss(loading);
        toast.success("Login success.");
        return response.data;
    }

    public async register(register: Register): Promise<GetUser> {
        const loading: string = toast.loading("Registering...");
        const response: AxiosResponse<GetUser> = await api.post(this.registerUrl, register);
        toast.dismiss(loading);
        toast.success("Register success.");
        return response.data;
    }

    public async logout(): Promise<void> {
        const loading: string = toast.loading("Loading...");
        const response: AxiosResponse<void> = await api.delete(this.logoutUrl);
        toast.dismiss(loading);
        toast.success("Logout success.");
        return response.data;
    }
}
export const authService = new AuthService();