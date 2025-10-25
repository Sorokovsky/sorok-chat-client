import type { FC, JSX } from 'react';
import type { ChatProps } from './chat.props';
import clsx from 'classnames';
import styles from './chat.module.scss';
import { Typography } from '@mui/material';
import { Messages } from '../messages/messages';
import { AiOutlineUserAdd } from "react-icons/ai";
import { SendMessage } from '../send-message/send-message';
import { Link } from 'react-router';
import { NEW_USER_ROUTE } from '@/shared';

export const Chat: FC<ChatProps> = ({ chat }): JSX.Element => {
    "use no memo"
    return (
        <div className={clsx(styles.chat)}>
            <div className={clsx(styles.heading)}>
                <div className={clsx(styles.left)}>
                    <Typography component={"h4"} variant='h4'>{chat.name}</Typography>
                    <p className={clsx(styles.description)}>{chat.description}</p>
                    <span>{chat.members.length} учасників</span>
                </div>
                <div className={clsx(styles.right)}>
                    
                    <Link to={NEW_USER_ROUTE.path}><AiOutlineUserAdd cursor={"pointer"} /></Link>
                </div>
            </div>
            <Messages messages={chat.messages} />
            <SendMessage />
        </div>
    );
};