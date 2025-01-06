import {type LoginUser} from "@/types/models/auth/login.type";
import {api} from "@/utils/api";
import {type AxiosResponse} from "axios";
import {type Register} from "@/types/models/auth/register.type";
import {type GetUser} from "@/types/models/users/get-user.type";
import toast from "react-hot-toast";
import {SUCCESS_LOGIN, SUCCESS_LOGOUT, SUCCESS_REGISTER} from "@/constants/messages.constant";
import { CONTENT_TYPE_HEADER_KEY, CONTENT_TYPE_FORMDATA_VALUE } from '../contracts/constants/common.constant';

class AuthService {
    private readonly baseUrl: string = '/auth';
    private readonly loginUrl: string = `${this.baseUrl}/login`;
    private readonly registerUrl: string = `${this.baseUrl}/register`;
    private readonly logoutUrl: string = `${this.baseUrl}/logout`;
    public async login(login: LoginUser): Promise<void> {
        const response: AxiosResponse<void> = await api.patch(this.loginUrl, login);
        if(response) toast.success(SUCCESS_LOGIN);
        return response.data;
    }

    public async register(register: Register): Promise<GetUser> {
        const response: AxiosResponse<GetUser> = await api.post(this.registerUrl, register, {
            headers: {
                [CONTENT_TYPE_HEADER_KEY]: CONTENT_TYPE_FORMDATA_VALUE
            }
        });
        if(response) toast.success(SUCCESS_REGISTER)
        return response.data;
    }

    public async logout(): Promise<void> {
        const response: AxiosResponse<void> = await api.delete(this.logoutUrl);
        if(response) toast.success(SUCCESS_LOGOUT);
        return response.data;
    }
}
export const authService = new AuthService();