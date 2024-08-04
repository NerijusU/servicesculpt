import { ID, Query } from 'appwrite';
import { databases, appwriteConfig } from './config';
import { getAccount } from './accountApi';
import { IUpdateUser } from '@/types';
import { deleteFile, getFilePreviewUrl, uploadFile } from './fileApi';
import { useGetUserByUsername } from '@/lib/react-query/user';

/**
 * Save user information to the database.
 *
 * @param {Object} user - The user object containing accountId, name, username, email, and imageUrl
 * @return {Promise} A promise that resolves to the newly created user object in the database
 */
export async function saveUserToDB(user: {
  accountId: string;
  name: string;
  username: string;
  email: string;
  imageUrl: URL;
}) {
  try {
    const storedUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return storedUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Retrieves the current user from the database based on the current account ID.
 *
 * @return {Promise<Document>} The document of the current user.
 */
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );
    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Updates a user's information and image, optionally uploading a new image file.
 *
 * @param {IUpdateUser} user - the user object containing updated information and an optional image file
 * @return {Promise<any>} the updated user object
 */
export async function updateUser(user: IUpdateUser) {
  const hasFileToUpdate = user.file.length > 0;
  try {
    let image = {
      imageUrl: user.imageUrl,
      imageId: user.imageId,
    };
    if (hasFileToUpdate) {
      const uploadedFile = await uploadFile(user.file[0]);
      if (!uploadedFile) throw Error;

      const fileUrl = await getFilePreviewUrl(uploadedFile.$id);
      if (!fileUrl) {
        deleteFile(uploadedFile.$id);
        throw Error;
      }

      image = {
        ...image,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
      };
    }
    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.userId,
      {
        name: user.name,
        bio: user.bio,
        imageUrl: image.imageUrl,
        imageId: image.imageId,
      }
    );

    if (!updatedUser) {
      if (hasFileToUpdate) {
        await deleteFile(image.imageId);
      }
      throw Error;
    }

    if (user.imageId) {
      await deleteFile(user.imageId);
    }

    return updatedUser;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Retrieves a user from the database by their ID.
 *
 * @param {string} id - The ID of the user to retrieve.
 * @return {Promise<any>} The user object if found, otherwise undefined.
 */
export async function getUserById(id: string) {
  try {
    const user = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      id
    );
    if (!user) throw Error;
    return user;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Retrieves a user object by their username from the database.
 *
 * @param {string} username - The username of the user to retrieve.
 * @return {Promise<Document>} The user document retrieved from the database.
 */
export async function getUserByUsername(username: string) {
  try {
    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('username', username)]
    );

    if (!user) throw Error;
    return user.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getUserIdByUsername(username: string) {
  try {
    const user = await getUserByUsername(username);
    if (!user) throw Error;
    return user.$id;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Retrieves a list of users from the database.
 *
 * @param {number} limit - The maximum number of users to retrieve. (optional)
 * @return {Promise<Array>} A promise that resolves to an array of user objects.
 */
export async function getUsers(limit?: number) {
  const queries: string[] = [Query.orderDesc('$createdAt')];
  if (limit) {
    queries.push(Query.limit(limit));
  }
  try {
    const users = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      queries
    );
    if (!users) throw Error;
    return users;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Deletes a user from the database.
 *
 * @param {string} userId - The ID of the user to be deleted.
 * @return {Promise<any>} A promise that resolves to the deleted user object.
 */
export async function deleteUser(userId: string) {
  try {
    const deletedUser = await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      userId
    );
    if (!deletedUser) throw Error;
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
}
