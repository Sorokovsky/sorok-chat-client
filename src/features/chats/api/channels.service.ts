import { httpClient } from "@/shared";
import { GET_CHANNELS_BY_ME } from "../constants/routes";
import type { Channel } from "../models";

class ChannelsService {
    public async getByMe(): Promise<Channel[]> {
        const response = await httpClient.get<Channel[]>(GET_CHANNELS_BY_ME);
        return response.data;
    }
};

export const channelsService = new ChannelsService();