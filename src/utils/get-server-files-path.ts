import {FILES_PREFIX} from "@/constants/common.constant";

export const getServerFilesPath = (path: string): string => {
    return `${FILES_PREFIX}/${path.replaceAll("\\", "/")}`;
}