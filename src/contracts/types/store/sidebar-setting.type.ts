export type SidebarSetting = {
    isOpen: boolean;
    closerSelector: string;
    show: () => void;
    hide: () => void;
    toggle: () => void;
};