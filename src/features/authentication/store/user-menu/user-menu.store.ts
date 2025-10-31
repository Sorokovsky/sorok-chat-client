import {create} from "zustand";
import type {UserMenu} from "@/features/authentication/store/user-menu/user-menu.type";

export const useUserMenuStore = create<UserMenu>(
    (set): UserMenu => ({
        isOpen: false,
        show() {
            set(prev => ({...prev, isOpen: true}));
        },
        hide() {
            set(prev => ({...prev, isOpen: false}));
        },
        toggle() {
            set(prev => ({...prev, isOpen: !prev.isOpen}));
        }
    })
);