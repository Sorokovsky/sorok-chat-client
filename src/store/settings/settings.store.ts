import { create } from "zustand";
import { showAction } from "@/store/settings/actions/show-action";
import { type SettingsStore } from "@/store/settings/settings.type";
import { hideAction } from "@/store/settings/actions/hide-action";
import { toggleAction } from "@/store/settings/actions/toggle-action";

export const useSettingsStore = create<SettingsStore>((set, get) => ({
    isOpen: false,
    show: () => set(showAction(get)),
    hide: () => set(hideAction(get)),
    toggle: () => set(toggleAction(get))
}));