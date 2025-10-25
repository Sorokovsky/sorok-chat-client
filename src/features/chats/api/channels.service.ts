import { httpClient } from "@/shared";
import { GET_CHANNELS_BY_ME, SEND_MESSAGE,  } from "../constants/routes";
import type { Channel, Message, NewMessage } from "../models";

class ChannelsService {
    public async getByMe(): Promise<Channel[]> {
        const response = await httpClient.get<Channel[]>(GET_CHANNELS_BY_ME);
        return response.data;
    }

    public async sendMessage(message: NewMessage, channelId: number): Promise<Message> {
        const response = await httpClient.put(`${SEND_MESSAGE}/${channelId}`, message);
        return response.data;
    };
};

export const channelsService = new ChannelsService();