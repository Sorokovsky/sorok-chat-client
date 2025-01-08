import { type Action } from '@/store/settings/actions/action.type';
import { type SettingsStore } from '@/store/settings/settings.type';
import { hideAction } from '@/store/settings/actions/hide-action';
import { showAction } from '@/store/settings/actions/show-action';
export const toggleAction: Action = (get: () => SettingsStore): Partial<SettingsStore> => {
    const { isOpen } = get();
    if (isOpen) {
        return hideAction(get);
    } else {
        return showAction(get);
    }
}