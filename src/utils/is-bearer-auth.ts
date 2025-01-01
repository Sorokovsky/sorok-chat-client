import {BEARER_PREFIX} from "@/constants/common.constant";

export const isBearerAuth = (authorization: string | null | undefined): boolean => {
    return authorization !== undefined && authorization !== null && authorization.startsWith(BEARER_PREFIX);
}