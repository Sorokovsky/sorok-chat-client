import { LOGO_URL } from "@/constants/images.constants";
import { DESCRIPTION, NAME } from "@/constants/seo.constants";
import { pagesService } from "@/services/pages.service";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: NAME,
        short_name: NAME,
        description: DESCRIPTION,
        start_url: pagesService.home,
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "fullscreen",
        icons: [
            {
                src: LOGO_URL,
                type: "image/svg",
            }
        ],
    };
};