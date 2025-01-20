import {type FC, type InputHTMLAttributes, type JSX} from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({...rest}): JSX.Element => {
    return (
        <>
            <input
                {...rest}
            />
        </>
    );
};