import { type MouseEventHandler, type FC, type JSX } from "react";
import { Avatar } from "@/ui/avatar/avatar";
import { useIsAuth } from '@/hooks/use-is-auth.hook';
import { Loader } from '@/ui/loader/loader';
import { DEFAULT_LOGO } from "@/constants/common.constant";

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Logo: FC<Props> = ({ onClick = () => { } }): JSX.Element => {
    const { isPending } = useIsAuth();
    return (
        <>
            {isPending ? <Loader /> : <Avatar avatarPath={DEFAULT_LOGO} fromServer={false} onClick={onClick} />}
        </>
    );
}