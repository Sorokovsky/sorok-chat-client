import type {GetUser} from "@/types/models/user/get-uset.type";
import api from "@/utils/api";

class UserService {
    private readonly baseUrl: string = "/users";
    private readonly getMeUrl: string = `${this.baseUrl}/get-me`;

    public async getMe(): Promise<GetUser> {
        const response = await api.get<GetUser>(this.getMeUrl);
        return response.data;
    }
};

export const userService = new UserService();