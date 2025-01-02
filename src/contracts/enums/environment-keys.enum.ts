export const EnvironmentKeys = {
  SERVER_HOST: 'SERVER_HOST',
  SERVER_PORT: 'SERVER_PORT',
  SERVER_PROTOCOL: 'SERVER_PROTOCOL',
  SERVER_API: 'SERVER_API',
  API_URL: 'API_URL',
  SERVER_URL: 'SERVER_URL',
} as const;
export type EnvironmentKeys = (typeof EnvironmentKeys)[keyof typeof EnvironmentKeys];