import {type User} from "@/types/models/users/user.type";

export type LoginUser = Required<Pick<User, "email" | "password">>