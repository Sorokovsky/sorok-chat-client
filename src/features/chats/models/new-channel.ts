import type { Channel } from "./channel";

export type NewChannel = Pick<Channel, "name" | "description">;