import type {FC, JSX} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {useChatsSidebarStore} from "@/features/chats";

export const ChatsSidebarToggle: FC = (): JSX.Element => {
    const toggle = useChatsSidebarStore(state => state.toggle);
    return (
        <MenuIcon cursor={"pointer"} onClick={toggle}/>
    );
};