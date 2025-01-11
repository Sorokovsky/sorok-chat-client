import type { User } from "@/types/models/user/user.type";
import type { Auth } from "@/types/models/auth/auth.type";

export type CreateUser = Partial<Omit<User, "avatarPath"
    | "id"
    | "createdAt"
    | "updatedAt"
    | "email"
    | "password">>
    & Auth;