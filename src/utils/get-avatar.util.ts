import { FILES_PREFIXX } from "@/constants/backend.constants";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export const getAvatar = (pathOrImage: string | StaticImport, fromServer: boolean = true): string | StaticImport => {
    if (isImage(pathOrImage))
    {
        return pathOrImage;
    } else {
        const filePath: string = `/${pathOrImage.replaceAll("\\", "/")}`;
        const path: string = fromServer ? `${FILES_PREFIXX}${filePath}` : filePath;
        return path;
    }
}

function isImage(pathOrImage: string | StaticImport): pathOrImage is StaticImport {
    return typeof pathOrImage !== "string";
}