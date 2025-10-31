import {User} from "@/features/authentication";
import {formatDate} from "@/shared";
import type {FC, JSX} from "react";
import type {MessageItemProps} from "./message-item.props";
import {isMessageNotChanged} from '@/features/chats/api/signing';
import clsx from 'classnames';
import styles from "./message-item.module.scss";
import {decrypt} from "@/features/chats";

const getAuthorFullName = (author: User): string => {
    return `${author.lastName} ${author.firstName} ${author.middleName}`;
};

export const MessageItem: FC<MessageItemProps> = ({ message }): JSX.Element => {
    "use no memo"
    const isCorrect = isMessageNotChanged(message);
    const detectionText: string = `${isCorrect ? "Не з": "З"}мінено несанкціонованим шляхом`;
    const decrypted = decrypt(message.text, message.author.macSecret);
    return (
        <li className={clsx(styles.message)}>
            <strong className={clsx(styles.author)}>Хто: {getAuthorFullName(message.author)}</strong>
            <p className={clsx(styles.author)}>Що: {decrypted} [{detectionText}]</p>
            <span className={clsx(styles.date)}>Коли: {formatDate(message.createdAt)}</span>
        </li>
    );
};