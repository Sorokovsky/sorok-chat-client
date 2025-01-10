export const EnviromentKeys = {
    API_HOST: "API_HOST",
    API_PORT: "API_PORT",
    API_PROTOKOL: "API_PROTOKOL",
} as const;

export type EnviromentKeys = (typeof EnviromentKeys)[keyof typeof EnviromentKeys];