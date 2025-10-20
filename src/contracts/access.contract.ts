export const ACCESS_RULE = {
    PUBLIC: "PUBLIC",
    PRIVATE: "PRIVATE",
    ALL_PERMIT: "ALL_PERMIT",
    ALL_DENY: "ALL_DENY",
} as const;

export type ACCESS_RULE = keyof typeof ACCESS_RULE;