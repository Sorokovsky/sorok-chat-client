import type {SidebarSetting} from "@/types/store/sidebar-setting.type";

export const toggleAction = (get: () => SidebarSetting): Partial<SidebarSetting> => {
    const {isOpen} = get();
    return {isOpen: !isOpen};
};