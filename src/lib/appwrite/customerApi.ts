import { INewCustomer, IUpdateCustomer } from '@/types';
import { ID, Query } from 'appwrite';
import { databases, appwriteConfig } from './config';

export async function createCustomer(customer: INewCustomer) {
  try {
    const createdCustomer = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.customersCollectionId,
      ID.unique(),
      customer
    );
    if (!createdCustomer) throw Error;
    return createdCustomer;
  } catch (error) {
    console.log(error);
  }
}

export async function getCustomerById(id: string) {
  try {
    const customer = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.customersCollectionId,
      id
    );
    if (!customer) throw Error;
    return customer;
  } catch (error) {
    console.log(error);
  }
}

export async function getCustomers(limit?: number) {
  const queries: string[] = [Query.orderDesc('$createdAt')];
  if (limit) {
    queries.push(Query.limit(limit));
  }
  try {
    const customers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.customersCollectionId,
      queries
    );
    if (!customers) throw Error;
    return customers;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCustomer(id: string, customer: IUpdateCustomer) {
  try {
    const updatedCustomer = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.customersCollectionId,
      id,
      customer
    );
    if (!updatedCustomer) throw Error;
    return updatedCustomer;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomer(id: string) {
  try {
    const deletedCustomer = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.customersCollectionId,
      id
    );
    if (!deletedCustomer) throw Error;
    return deletedCustomer;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCustomersFromUser(userId: string) {
  try {
    const customers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.customersCollectionId,
      [Query.equal('user', userId)]
    );
    if (!customers) throw Error;
    return customers;
  } catch (error) {
    console.log(error);
  }
}
