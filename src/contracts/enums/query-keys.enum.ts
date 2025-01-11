export const QueryKeys = {
    USERS: "users",
    GET_ME: "get-me",
    LOGIN: "login",
    REGISTER: "register",
    LOGOUT: "logout"
} as const;

export type QueryKeys = (typeof QueryKeys)[keyof typeof QueryKeys];