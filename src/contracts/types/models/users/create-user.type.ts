import {type User} from "@/types/models/users/user.type";

export type CreateUser = Partial<Omit<User, "createdAt" | "updatedAt" | "id" | "email" | "password" | "avatarPath">>
    & Required<Pick<User, "email" | "password">>
    & {
    avatar?: File;
};