import { INewCustomer } from '@/types';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import {
  createCustomer,
  deleteCustomer,
  getCustomerById,
} from '../appwrite/customerApi';
import { QueryKeys } from './queryKeys';

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (customer: INewCustomer) => createCustomer(customer),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_CUSTOMERS],
      });
    },
  });
};

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (customer: INewCustomer) => createCustomer(customer),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_CUSTOMERS],
      });
    },
  });
};

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (customerId: string) => deleteCustomer(customerId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_CUSTOMERS],
      });
    },
  });
};

export const useGetCustomerById = (customerId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_CUSTOMER_BY_ID, customerId],
    queryFn: () => getCustomerById(customerId),
    enabled: !!customerId,
  });
};

export const useGetAllCustomersFromUser = (userId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_USER_CUSTOMERS, userId],
    queryFn: () => getCustomerById(userId),
    enabled: !!userId,
  });
};
