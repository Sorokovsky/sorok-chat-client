import {create} from "zustand";
import type {ChatsSidebar} from "./chats-sidebar.type";

export const useChatsSidebarStore = create<ChatsSidebar>(
    (set): ChatsSidebar => {
        return {
            isOpen: false,
            show() {
                set((prev) => ({...prev, isOpen: true}));
            },
            hide() {
                set((prev) => ({...prev, isOpen: false}));
            },
            toggle() {
                set((prev) => ({...prev, isOpen: !prev.isOpen}));
            }
        };
    })