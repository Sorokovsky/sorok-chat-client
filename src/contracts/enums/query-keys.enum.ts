export const QueryKeys = {
    USERS: 'users',
    CHANNELS: 'channels',
    MESSAGES: 'messages',
    AUTH: "auth",
} as const;
export type QueryKeys = (typeof QueryKeys)[keyof typeof QueryKeys];