import type { SidebarSetting } from "@/types/store/sidebar-setting.type";
import { type RefObject, useEffect } from "react";

export const useAutoClose = (ref: RefObject<HTMLElement | null>, state: SidebarSetting) => {
    const clickHandler = (event: MouseEvent): void => {
        if (ref.current === null) return;
        
        const target: HTMLElement = event.target as HTMLElement;
        const currentSelector: string = ref.current.className
            .replace(/^/g, ".")
            .replaceAll(" ", ".");
        const isOutside: boolean = target.closest(currentSelector) === null;
        const isNotClose: boolean = target.closest(state.closerSelector) === null;
        const isClickable: boolean = target.closest(`${currentSelector} > a, ${currentSelector} > button`) !== null;
        if ((isOutside || isClickable) && isNotClose) {
            state.hide();
        }
    };
    useEffect(() => {
        document.body.addEventListener("click", clickHandler, {capture: false});
    }), [ref, state];
};