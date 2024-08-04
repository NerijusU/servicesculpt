import { useMutation, useQueries, useQuery } from '@tanstack/react-query';
import {
  createAppointment,
  deleteAppointment,
  getAppointmentByIdFromUser,
  getAppointmentsByUserId,
  updateAppointment,
} from '../appwrite/appointmentApi';
import { INewAppointment, IUpdateAppointment } from '@/types';
import { QueryKeys } from './queryKeys';

export const useCreateAppointment = () => {
  return useMutation({
    mutationFn: (appointment: INewAppointment) =>
      createAppointment(appointment),
  });
};

export const useGetAppointmentsByUserId = (userId: string) => {
  return useQueries({
    queries: [
      {
        queryKey: [QueryKeys.GET_USER_APPOINTMENTS, userId],
        queryFn: () => getAppointmentsByUserId(userId),
        enabled: !!userId,
      },
    ],
  });
};

export const useGetAppointmentsByIdFromUser = (userId: string, id: string) => {
  return useQuery({
    queryKey: [QueryKeys.GET_USER_APPOINTMENT_BY_ID, userId, id],
    queryFn: () => getAppointmentByIdFromUser(userId, id),
    enabled: !!userId && !!id,
  });
};

export const useUpdateAppointment = () => {
  return useMutation({
    mutationFn: ({
      id,
      appointment,
    }: {
      id: string;
      appointment: IUpdateAppointment;
    }) => updateAppointment(id, appointment),
  });
};

export const useDeleteAppointment = () => {
  return useMutation({
    mutationFn: (id: string) => deleteAppointment(id),
  });
};
