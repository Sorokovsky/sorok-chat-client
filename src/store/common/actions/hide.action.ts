import type {SidebarSetting} from "@/types/store/sidebar-setting.type";

export const hideAction = (): Partial<SidebarSetting> => {
    return {isOpen: false};
};