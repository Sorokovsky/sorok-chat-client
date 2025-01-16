import type {SidebarSetting} from "@/types/store/sidebar-setting.type";
import {hideAction} from "@/store/common/actions/hide.action";
import {showAction} from "@/store/common/actions/show.action";
import {toggleAction} from "@/store/common/actions/toggle.action";

export const getSidebarInitial = (
    set: (data: Partial<SidebarSetting>) => void,
    get: () => SidebarSetting): SidebarSetting => {
    return {
        isOpen: false,
        hide: () => set(hideAction()),
        show: () => set(showAction()),
        toggle: () => set(toggleAction(get)),
    };
}