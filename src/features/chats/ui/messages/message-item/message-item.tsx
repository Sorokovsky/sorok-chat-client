import { User } from "@/features/authentication";
import { formatDate } from "@/shared";
import type { FC, JSX } from "react";
import type { MessageItemProps } from "./message-item.props";
import { isMessageNotChanged } from '@/features/chats/api/signing';
import clsx from 'classnames';
import styles from "./message-item.module.scss";

const getAuthorFullName = (author: User): string => {
    return `${author.lastName} ${author.firstName} ${author.middleName}`;
};

export const MessageItem: FC<MessageItemProps> = ({ message }): JSX.Element => {
    const isCorrect = isMessageNotChanged(message);
    const detectionText: string = `${isCorrect ? "Не з": "З"}мінено несанкціонованим шляхом`;
    return (
        <li className={clsx(styles.message)}>
            <strong className={clsx(styles.author)}>Хто: {getAuthorFullName(message.author)}</strong>
            <p className={clsx(styles.author)}>Що: {message.text} [{detectionText}]</p>
            <span className={clsx(styles.date)}>Коли: {formatDate(message.createdAt)}</span>
        </li>
    );
};