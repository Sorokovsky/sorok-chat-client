export const getServerURL = (
    protocol: string,
    host: string,
    port: string
): string => `${protocol}://${host}:${port}`;
export const getApiURL = (
    api: string,
    protocol: string,
    host: string,
    port: string
): string => `${getServerURL(protocol, host, port)}/${api}`;