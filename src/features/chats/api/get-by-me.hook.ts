import { useQuery } from "@tanstack/react-query";
import { GET_CHANNELS_BY_ME } from "../constants/routes";
import { channelsService } from "./channels.service";

export const useGetChannelsByMe = () => {
    return useQuery({
        queryKey: [GET_CHANNELS_BY_ME],
        queryFn: async () => await channelsService.getByMe(),
        refetchInterval: 1000
    });
};