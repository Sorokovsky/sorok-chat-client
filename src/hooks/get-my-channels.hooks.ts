import {useQuery} from "@tanstack/react-query";
import {GET_MY_CHANNELS} from "@/constants/query-key.constants";
import {channelsService} from "@/services/channels.service";

export const useGetMyChannels = () => useQuery({
    queryKey: [GET_MY_CHANNELS],
    queryFn: channelsService.getMyChannels,
    refetchInterval: 1000,
});