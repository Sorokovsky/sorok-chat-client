import type { FC, JSX } from 'react';
import type { ChatProps } from './chat.props';
import clsx from 'classnames';
import styles from './chat.module.scss';
import { Typography } from '@mui/material';
import { Messages } from '../messages/messages';

export const Chat: FC<ChatProps> = ({chat}): JSX.Element => {
    return (
        <div className={clsx(styles.chat)}>
            <div className={clsx(styles.heading)}>
                <Typography component={"h4"} variant='h4'>{chat.name}</Typography>
                <p className={clsx(styles.description)}>{chat.description}</p>
            </div>
            <Messages messages={chat.messages} />
        </div>
    );
};