import type { SidebarSetting } from "@/types/store/sidebar-setting.type";
import { create } from "zustand";
import { getSidebarInitial } from '@/store/common/initials/sidebar.initial';

export const useChannelsSidebar = create<SidebarSetting>((set, get) => {
    return {
        ...getSidebarInitial(set, get),
        closerSelector: "#logo",
    }
});