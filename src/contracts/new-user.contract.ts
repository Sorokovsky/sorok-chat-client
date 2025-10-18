import {User} from "@/contracts/user.contract";

export type NewUser = Omit<User, "id" | "createdAt" | "updatedAt">;