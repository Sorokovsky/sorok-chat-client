import { GetChannel } from "@/types/models/channel/get-channel.type";
import { api } from "@/utils/api";

class ChannelsService {
    private readonly baseUrl: string = "/channels";

    public async getAll(): Promise<GetChannel[]> {
        const response = await api.get<GetChannel[]>(this.baseUrl);
        return response.data;
    }
};
export const channelsService = new ChannelsService();