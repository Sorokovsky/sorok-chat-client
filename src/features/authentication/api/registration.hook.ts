import type { ApiError } from "@/entities/api-error";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { REGISTRATION_KEY, PROFILE_KEY } from '../constants/queries';
import type { RegistrationDto } from '../models/registration';
import type { User } from '../models/user';
import { authenticationService } from "./authentication.service";

export const useRegistration = () => {
    const client = useQueryClient();
    return useMutation({
        mutationKey: [REGISTRATION_KEY],
        mutationFn: async (dto: RegistrationDto): Promise<ApiError | User> =>
            authenticationService.registration(dto),
        onSuccess() {
            client.invalidateQueries({ queryKey: [PROFILE_KEY] });
        },
    });
};