import { INewAppointment, IUpdateAppointment } from '@/types';
import { ID, Query } from 'appwrite';
import { databases, appwriteConfig } from './config';

export async function createAppointment(appointment: INewAppointment) {
  try {
    const createdAppointment = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      ID.unique(),
      appointment
    );
    if (!createdAppointment) throw Error;
    return createdAppointment;
  } catch (error) {
    console.log(error);
  }
}

export async function getAppointmentById(id: string) {
  try {
    const appointment = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      id
    );
    if (!appointment) throw Error;
    return appointment;
  } catch (error) {
    console.log(error);
  }
}

export async function getAppointmentsByUserId(userId: string) {
  try {
    const appointments = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      [Query.equal('user', userId)]
    );
    if (!appointments) throw Error;
    return appointments;
  } catch (error) {
    console.log(error);
  }
}

export async function getAppointmentByIdFromUser(userId: string, id: string) {
  try {
    const appointment = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      id,
      [Query.equal('user', userId)]
    );
    if (!appointment) throw Error;
    return appointment;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAppointment(id: string) {
  try {
    const deletedAppointment = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      id
    );
    if (!deletedAppointment) throw Error;
    return deletedAppointment;
  } catch (error) {
    console.log(error);
  }
}

export async function updateAppointment(
  id: string,
  appointment: IUpdateAppointment
) {
  try {
    const updatedAppointment = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      id,
      appointment
    );
    if (!updatedAppointment) throw Error;
    return updatedAppointment;
  } catch (error) {
    console.log(error);
  }
}
