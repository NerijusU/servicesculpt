import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COL_ID,
  // postsCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COL_ID,
  // savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COL_ID,
  customersCollectionId: import.meta.env.VITE_APPWRITE_CUSTOMERS_COL_ID,
  offersCollectionId: import.meta.env.VITE_APPWRITE_OFFERS_COL_ID,
  appointmentsCollectionId: import.meta.env.VITE_APPWRITE_APPONTS_COL_ID,
  imageMapCollectionId: import.meta.env.VITE_APPWRITE_IMAGEMAP_COL_ID,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
