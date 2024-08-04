import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from './queryKeys';
import {
  createOffer,
  getOfferById,
  getOfferByIdFromUser,
  getUserOffers,
  updateOffer,
} from '../appwrite/offerApi';
import { INewOffer, IOffer } from '@/types';

export const useGetUserOffers = (userId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_USER_OFFERS, userId],
    queryFn: () => getUserOffers(userId),
    enabled: !!userId,
  });
};

export const useCreateOffer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (offer: INewOffer) => createOffer(offer),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_USER_OFFERS],
      });
    },
  });
};

export const useGetOfferById = (offerId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_OFFER_BY_ID, offerId],
    queryFn: () => getOfferById(offerId),
    enabled: !!offerId,
  });
};

export const useGetOfferByIdFromUser = (userId: string, offerId: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_OFFER_BY_ID_FROM_USER, userId, offerId],
    queryFn: () => getOfferByIdFromUser(userId, offerId),
    enabled: !!userId && !!offerId,
  });
};

export const useDeleteOffer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (offerId: string) => getOfferById(offerId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_USER_OFFERS],
      });
    },
  });
};

export const useUpdateOffer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (offer: IOffer) => updateOffer(offer),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GET_OFFER_BY_ID, data?.$id],
      });
    },
  });
};
