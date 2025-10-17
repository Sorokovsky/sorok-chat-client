import type { NextConfig } from "next";
import {Rewrite} from "next/dist/lib/load-custom-routes";
import {SERVER_URL, API} from "@/constants/server.constants";

const nextConfig: NextConfig = {
    async rewrites(): Promise<Rewrite[]> {
        return [
            {
                source: `${API}/:path*`,
                destination: `${SERVER_URL}/:path*`,
            }
        ];
    }
};

export default nextConfig;
