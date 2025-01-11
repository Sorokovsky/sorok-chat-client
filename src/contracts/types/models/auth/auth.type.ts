import type { User } from "@/types/models/user/user.type";

export type Auth = Required<Pick<User, "email" | "password">>;