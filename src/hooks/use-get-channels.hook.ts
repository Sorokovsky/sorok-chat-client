import { useQuery } from "./use-query"
import { QueryKeys } from '@/enums/query-keys.enum';
import { channelsService } from '@/services/channels.service';
import { SUCCESS_CHANNELS_LOADED } from '@/constants/messages.constant';

export const useGetChannels = () => {
    return useQuery([QueryKeys.CHANNELS], () => channelsService.getAll(), false, SUCCESS_CHANNELS_LOADED);
}