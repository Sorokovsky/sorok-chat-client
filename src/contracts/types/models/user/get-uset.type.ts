import type {User} from "@/types/models/user/user.type";

export type GetUser = Omit<User, "password" | "avatar">;