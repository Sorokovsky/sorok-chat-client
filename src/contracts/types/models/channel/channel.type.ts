import { type Base } from '../base.type';
export type Channel = {
    name: string,
    description: string,
    imagePath: string;
    avatarPath: string;
} & Base;