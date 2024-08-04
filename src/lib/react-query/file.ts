import { useQueryClient, useMutation } from '@tanstack/react-query';
import { uploadFile } from '../appwrite/fileApi';
import { QueryKeys } from './queryKeys';

export const useUploadFile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => uploadFile(file),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_FILES],
      });
    },
  });
};
