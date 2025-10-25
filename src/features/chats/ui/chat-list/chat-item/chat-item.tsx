import type { FC, JSX } from "react";
import type { ChatItemProps } from "./chat-item.props";
import clsx from "classnames";
import styles from "./chat-item.module.scss";

export const ChatItem: FC<ChatItemProps> = ({ chat }): JSX.Element => {
    return (
        <li className={clsx(styles.item)} >
            <strong>{chat.name}</strong>
            <p>{chat.description}</p>
        </li>
    );
};