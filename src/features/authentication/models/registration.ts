import type { User } from "./user";

export type RegistrationDto = Omit<User, "id" | "createdAt" | "updatedAt"> & {
    password: string;
};