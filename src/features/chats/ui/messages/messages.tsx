import type { FC, JSX } from "react";
import { MessagesProps } from "./messages.props";
import clsx from 'classnames';
import styles from "./messages.module.scss";
import { MessageItem } from "./message-item/message-item";

export const Messages: FC<MessagesProps> = ({ messages }): JSX.Element => {
    "use no memo"
    return (
        <ul className={clsx(styles.messages)}>
            {messages.map(message => <MessageItem key={message.id} message={message} />)}
        </ul>
    );
};