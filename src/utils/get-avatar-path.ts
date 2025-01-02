import {getServerFilesPath} from "@/utils/get-server-files-path";
import {DEFAULT_AVATAR} from "@/constants/common.constant";

export const getAvatarPath = (path: string | undefined): string => {
    if(path === undefined) {
        return DEFAULT_AVATAR;
    }
    else {
        const avatarPath: string = path.replaceAll(" ", "");
        return avatarPath !== "" ? getServerFilesPath(avatarPath) : DEFAULT_AVATAR;
    }
}