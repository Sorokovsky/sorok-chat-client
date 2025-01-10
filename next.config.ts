import type { NextConfig } from "next";
import { EnviromentKeys } from '@/enums/enviroment-keys.enum';
import { SERVER_PREFIX } from '@/constants/api.constants';

const protocol: string = process.env[EnviromentKeys.API_PROTOKOL] || "";
const port: string = (process.env[EnviromentKeys.API_PORT] || "5000");
const host: string = process.env[EnviromentKeys.API_HOST] || "";
export const serverUrl: string = `${protocol}://${host}:${port}`;

const nextConfig: NextConfig = {
  env: {
    [EnviromentKeys.API_HOST]: process.env[EnviromentKeys.API_HOST],
    [EnviromentKeys.API_PORT]: process.env[EnviromentKeys.API_PORT],
    [EnviromentKeys.API_PROTOKOL]: process.env[EnviromentKeys.API_PROTOKOL],
  },
  async rewrites() {
    return [
      {
        source: SERVER_PREFIX + "/:path*",
        destination: `${serverUrl}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: protocol as "http",
        hostname: host,
        port: port,
      }
    ],
  },
};

export default nextConfig;
