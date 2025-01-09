import { pagesService } from "@/services/pages.service";
import { type GetChannel } from "@/types/models/channel/get-channel.type";
import Link from "next/link";
import { type FC, type JSX } from "react";
import { Avatar } from '@/ui/avatar/avatar';
import cn from 'clsx';
import styles from "./chat-item.module.sass";
import { Heading } from '@/ui/heading/heading';
import { HeadingTags } from '@/enums/heading-tags.enum';

interface Props {
    chat: GetChannel;
};

export const ChatItem: FC<Props> = ({ chat }): JSX.Element => {
    return (
        <li
            className={cn(styles.item)}
        >
            <Link
                className={cn(styles.link)}
                href={`${pagesService.chats}/${chat.id}`}
            >
                <Avatar avatarPath={chat.avatarPath} />
                <Heading className={cn(styles.title)} tag={HeadingTags.H6}>{chat.name}</Heading>
            </Link>
        </li>
    );
}