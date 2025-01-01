import {type User} from "@/types/models/users/user.type";

export type GetUser = Omit<User, "password">