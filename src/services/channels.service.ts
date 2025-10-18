import {Channel} from "node:diagnostics_channel";
import {client} from "@/http-client";

class ChannelsService {
    public async getMyChannels(): Promise<Channel[]> {
        const response = await client.get<Channel[]>("/channels/by-me");
        return response.data;
    }
}

export const channelsService = new ChannelsService();