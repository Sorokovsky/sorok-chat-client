import { GetChannel } from "@/types/models/channel/get-channel.type";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { SUCCESS_CHANNELS_LOADED } from '@/constants/messages.constant';

class ChannelsService {
    private readonly baseUrl: string = "/channels";

    public async getAll(): Promise<GetChannel[]> {
        const response = await api.get<GetChannel[]>(this.baseUrl);
        if (response) toast.success(SUCCESS_CHANNELS_LOADED);
        return response.data;
    }
};
export const channelsService = new ChannelsService();