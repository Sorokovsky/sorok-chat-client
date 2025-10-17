import {API} from "@/constants/server.constants";
import {client} from "@/http-client";
import {User} from "@/contracts/user.contract";

class AuthenticationService {
    public async getProfile(): Promise<User> {
        const response = await client.get<User>(`/authentication/profile`);
        return response.data;
    }
}

export const authenticationService = new AuthenticationService();