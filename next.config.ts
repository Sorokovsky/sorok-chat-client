import type { NextConfig } from "next";
import {EnvironmentKeys} from "@/enums/environment-keys.enum";
import {type Rewrite} from "next/dist/lib/load-custom-routes";
import {API_URL} from "@/constants/common.constant";

const nextConfig: NextConfig = {
    async rewrites(): Promise<Rewrite[]> {
        return [
            {
                source: `${API_URL}/:path*`,
                destination: `${process.env[EnvironmentKeys.API_URL]}/:path*`,
            }
        ] as Rewrite[];
    },
    env: {
        API_URL: process.env[EnvironmentKeys.API_URL],
    }
};

export default nextConfig;
