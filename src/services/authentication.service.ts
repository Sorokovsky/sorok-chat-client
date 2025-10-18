import {client} from "@/http-client";
import {User} from "@/contracts/user.contract";
import {LoginDto} from "@/contracts/login.contract";
import {NewUser} from "@/contracts/new-user.contract";
import {AxiosResponse} from "axios";

class AuthenticationService {
    public async getProfile(): Promise<User> {
        const response = await client.get<User>(`/authentication/profile`);
        return response.data;
    }

    public async login(loginDto: LoginDto): Promise<void> {
        await client.put<unknown, unknown, LoginDto>("/authentication/login", loginDto);
    }

    public async registration(newUser: NewUser): Promise<User> {
        const response = await client.post<unknown, AxiosResponse<User>, NewUser>(`/authentication/registration`, newUser);
        return response.data;
    }

    public async logout(): Promise<void> {
        await client.delete(`/authentication/logout`);
    }
}

export const authenticationService = new AuthenticationService();