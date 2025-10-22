export const AccessRule = {
    DENY: "DENY",
    PERMIT: "PERMIT",
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC"
} as const;

export type AccessRule = keyof typeof AccessRule;