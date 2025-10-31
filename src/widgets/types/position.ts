export const Position = {
    left: "left",
    right: "right",
} as const;

export type Position = keyof typeof Position;