import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getCurrentUser,
  getUserById,
  getUserByUsername,
  getUserIdByUsername,
  getUsers,
  updateUser,
} from '../appwrite/userApi';
import { QueryKeys } from './queryKeys';
import { IUpdateUser } from '@/types';

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QueryKeys.GET_CURRENT_USER],
    queryFn: () => getCurrentUser(),
  });
};

/**
 * Returns a mutation hook for updating a user.
 *
 * @return {MutationHook} The mutation hook for updating a user.
 */
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: IUpdateUser) => {
      return updateUser(user);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_CURRENT_USER],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_USER_BY_ID, data?.$id],
      });
    },
  });
};

export const useGetUserById = (userId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_USER_BY_ID, userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });
};

export const useGetUserByUsername = (username: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_USER_BY_USERNAME, username],
    queryFn: () => getUserByUsername(username),
    enabled: !!username,
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: [QueryKeys.GET_USERS],
    queryFn: () => getUsers(),
  });
};

export const useGetUserIdByUsername = (username: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_USER_ID_BY_USERNAME, username],
    queryFn: () => getUserIdByUsername(username),
    enabled: !!username,
  });
};
