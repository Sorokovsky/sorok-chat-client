import {GetUser} from "@/types/models/users/get-user.type";
import {api} from "@/utils/api";
import {AxiosResponse} from "axios";
import toast from 'react-hot-toast';
import { SUCCESS_AUTHENTICATED } from '@/constants/messages.constant';

class UsersService {
    private readonly baseUrl: string = '/users';
    private readonly getMeUrl: string = `${this.baseUrl}/get-me`;
    public async getMe(): Promise<GetUser> {
        const response: AxiosResponse<GetUser> = await api.get(this.getMeUrl);
        if (response) toast.success(SUCCESS_AUTHENTICATED);
        return response.data;
    }
}
export const usersService = new UsersService();