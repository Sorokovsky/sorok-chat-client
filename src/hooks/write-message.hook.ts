import { GET_MY_CHANNELS, WRITE_MESSAGE } from '@/constants/query-key.constants';
import { channelsService } from '@/services/channels.service';
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';
export const useWriteMessage = () => {
    const queryClient: QueryClient = useQueryClient();
    return useMutation({
        mutationKey: [WRITE_MESSAGE],
        mutationFn: channelsService.writeMessage,
        async onSuccess() {
            await queryClient.resetQueries({queryKey: [GET_MY_CHANNELS]});
            queryClient.clear();
        }
    });
};