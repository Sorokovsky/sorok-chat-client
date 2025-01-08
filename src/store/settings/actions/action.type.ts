import { type SettingsStore } from "../settings.type";

export type Action = (get: () => SettingsStore) => Partial<SettingsStore>;