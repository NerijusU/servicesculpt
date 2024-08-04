import { Models, ID } from 'appwrite';
import { storage, appwriteConfig } from './config';

export async function uploadFile(file: File): Promise<Models.File> {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );
    return uploadedFile;
  } catch (error) {
    console.log(error);
    throw Error;
  }
}

export async function getFilePreviewUrl(fileId: string): Promise<URL> {
  try {
    const fileUrl = await storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      'top',
      100
    );

    if (!fileId) throw Error;
    return fileUrl;
  } catch (error) {
    console.log(error);
    throw Error;
  }
}

export async function deleteFile(fileId: string) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);
    return { status: 'ok' };
  } catch (error) {
    console.log(error);
  }
}
