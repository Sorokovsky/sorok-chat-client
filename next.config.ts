import type { NextConfig } from "next";
import {type Rewrite} from "next/dist/lib/load-custom-routes";
import {API_URL, FILES_PREFIX} from "@/constants/common.constant";
import {getApiURL, getServerURL} from "@/utils/backand";
import {EnvironmentKeys} from "@/enums/environment-keys.enum";

export const apiURL: string = getApiURL(
    process.env[EnvironmentKeys.SERVER_API]!,
    process.env[EnvironmentKeys.SERVER_PROTOCOL]!,
    process.env[EnvironmentKeys.SERVER_HOST]!,
    process.env[EnvironmentKeys.SERVER_PORT]!,
);
export const serverUrl: string = getServerURL(
    process.env[EnvironmentKeys.SERVER_PROTOCOL]!,
    process.env[EnvironmentKeys.SERVER_HOST]!,
    process.env[EnvironmentKeys.SERVER_PORT]!,
);
const nextConfig: NextConfig = {
    async rewrites(): Promise<Rewrite[]> {
        return [
            {
                source: `${API_URL}/:path*`,
                destination: `${apiURL}/:path*`,
            },
            {
                source: `${FILES_PREFIX}/:path*`,
                destination: `${serverUrl}/:path*`
            }
        ] as Rewrite[];
    },
    env: {
        API_URL: apiURL,
        SERVER_URL: serverUrl,
    },
    images: {
        remotePatterns: [
            {
                protocol: process.env[EnvironmentKeys.SERVER_PROTOCOL] as "http" | "https" | undefined,
                hostname: process.env[EnvironmentKeys.SERVER_HOST]!,
                port: process.env[EnvironmentKeys.SERVER_PORT],
            }
        ]
    }
};

export default nextConfig;
