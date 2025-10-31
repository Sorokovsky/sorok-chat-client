import type {FC, JSX} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {useChatsSidebarStore} from "@/features/chats";
import {IconButton} from "@mui/material";

export const ChatsSidebarToggle: FC = (): JSX.Element => {
    const toggle = useChatsSidebarStore(state => state.toggle);
    return (
        <IconButton color={"inherit"}>
            <MenuIcon cursor={"pointer"} onClick={toggle}/>
        </IconButton>
    );
};