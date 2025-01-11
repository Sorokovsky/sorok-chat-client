import type { SidebarSetting } from "@/types/store/sidebar-setting.type";

export const showAction = (): Partial<SidebarSetting> => {
    return { isOpen: true };
};