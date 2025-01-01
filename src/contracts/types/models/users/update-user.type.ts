import {type User} from "@/types/models/users/user.type";

export type UpdateUser = Partial<Omit<User, "updatedAt" | "createdAt" | "id"| "avatarPath">>
    & {
    avatar?: File;
};