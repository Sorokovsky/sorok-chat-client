import type { Base } from "@/types/models/base.type";

export type User = {
    email: string,
    password: string;
    name: string;
    surname: string;
    middName: string;
    avatar: File;
    avatarPath: string
} & Base;