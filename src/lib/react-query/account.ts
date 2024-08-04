import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createUserAccount,
  deleteAccount,
  getAccount,
  signInAccount,
  signOutAccount,
} from '../appwrite/accountApi';

export const useCreateUserAcount = () => {
  return useMutation({
    mutationFn: (user: {
      name: string;
      email: string;
      password: string;
      username: string;
    }) => createUserAccount(user),
  });
};
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: () => getAccount(),
  });
};

export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: () => deleteAccount('current'),
  });
};
