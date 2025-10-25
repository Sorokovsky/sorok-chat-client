import { httpClient } from "@/shared";
import { ADD_USER, CHANNELS_ROUTE, GET_CHANNELS_BY_ME, SEND_MESSAGE,  } from "../constants/routes";
import type { Channel, NewChannel, NewMessage } from "../models";

class ChannelsService {
    public async getByMe(): Promise<Channel[]> {
        const response = await httpClient.get<Channel[]>(GET_CHANNELS_BY_ME);
        return response.data;
    }

    public async sendMessage(message: NewMessage, channelId: number): Promise<Channel> {
        const response = await httpClient.put(`${SEND_MESSAGE}/${channelId}`, message);
        return response.data;
    };

    public async createChannel(channel: NewChannel): Promise<Channel> {
        const response = await httpClient.post(CHANNELS_ROUTE, channel);
        return response.data;
    }

    public async addUser(userEmail: string, channelId: number): Promise<Channel> {
        const response = await httpClient.put(`${ADD_USER}/${channelId}/${userEmail}`);
        return response.data;
    }
};

export const channelsService = new ChannelsService();