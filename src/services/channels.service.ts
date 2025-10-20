import { Channel } from "@/contracts/channel.contract";
import { NewMessage } from "@/contracts/new-message.contract";
import {client} from "@/http-client";
import { AxiosResponse } from 'axios';

class ChannelsService {
    public async getMyChannels(): Promise<Channel[] | null> {
        const response = await client.get<Channel[]>("/channels/by-me");
        return response.data || null;
    }

    public async writeMessage({message, channelId}: {message: NewMessage, channelId: number}): Promise<Channel> {
        const response = await client.put<unknown, AxiosResponse<Channel>, NewMessage>(`/channels/add-message/${channelId}`, message);
        return response.data;
    }
}

export const channelsService = new ChannelsService();