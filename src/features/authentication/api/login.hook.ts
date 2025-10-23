import { ApiError } from "@/entities/api-error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LOGIN_KEY, PROFILE_KEY } from '../constants/queries';
import type { LoginDto } from "../models";
import { authenticationService } from './authentication.service';

export const useLogin = () => {
    const client = useQueryClient();
    return useMutation({
        mutationKey: [LOGIN_KEY],
        mutationFn: async (loginDto: LoginDto): Promise<ApiError | null> => await authenticationService.login(loginDto),
        onSuccess() {
            client.invalidateQueries({ queryKey: [PROFILE_KEY] });
        }
    });
};