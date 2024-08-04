import { ID } from 'appwrite';
import { account, avatars } from './config';
import { saveUserToDB } from './userApi';

/**
 * Create a new user account in the database and return the newly created user.
 *
 * @param {INewAccount} user - the new user object containing email, password, and name
 * @return {Promise<IUser>} the newly created user object
 */
export async function createUserAccount(user: {
  email: string;
  password: string;
  name: string;
  username: string;
}) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);
    const storedUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      imageUrl: avatarUrl,
      username: user.username,
    });

    return storedUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Asynchronous function to sign in to an account.
 *
 * @param {object} user - An object containing the user's email and password
 * @return {Promise} The session object if successful, otherwise the error object
 */
export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);
    return session;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Retrieves the current account.
 *
 * @return {Promise<Account>} The current account.
 */
export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Asynchronous function to sign out the current account.
 *
 * @return {Promise<any>} The response from deleting the current session, or an error if unsuccessful.
 */
export async function signOutAccount() {
  try {
    const response = await account.deleteSession('current');
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteAccount(identity: string) {
  try {
    const response = await account.deleteIdentity(identity);

    if (!response) throw Error;

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
