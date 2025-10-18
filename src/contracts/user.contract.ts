import {Base} from "@/contracts/base.contract";

export type User = Base & {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
};