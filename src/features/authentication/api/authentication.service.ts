import { httpClient } from "@/shared";
import { PROFILE_ROUTE } from "../constants";
import type { User } from "../models";

class AuthenticationService {
    public async getProfile(): Promise<User> {
        const response = await httpClient.get<User>(PROFILE_ROUTE);
        return response.data;
    };
};

export const authenticationService = new AuthenticationService();