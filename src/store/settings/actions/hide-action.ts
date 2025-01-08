import { type SettingsStore } from '@/store/settings/settings.type';
import { type Action } from '@/store/settings/actions/action.type';
export const hideAction: Action = (): Partial<SettingsStore> => ({
    isOpen: false,
});