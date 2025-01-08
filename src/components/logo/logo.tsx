import { type MouseEventHandler, type FC, type JSX } from "react";
import { Avatar } from "@/ui/avatar/avatar";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Logo: FC<Props> = ({onClick = () => {}}): JSX.Element => {
    return <Avatar avatarPath="/logo.svg" fromServer={false} onClick={onClick} />
}