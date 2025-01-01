import {type Base} from "@/types/models/base.type";

export type User = {
  email: string;
  name: string;
  surname: string;
  password: string;
  middleName: string;
  avatarPath: string;
} & Base;