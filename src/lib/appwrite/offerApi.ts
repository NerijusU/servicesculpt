import { INewOffer, IOffer } from '@/types';
import { ID, Query } from 'appwrite';
import { databases, appwriteConfig } from './config';
import { uploadFile, getFilePreviewUrl, deleteFile } from './fileApi';

export async function createOffer(offer: INewOffer) {
  try {
    const fileUrls: string[] = [];
    const fileIds: string[] = [];
    const imageIds = [];
    if (!offer?.imageMap) throw Error;
    for (const file of offer?.imageMap) {
      console.log('imageMap', file);
      const uploadedFile = await uploadFile(file);
      if (!uploadedFile) throw Error;
      const fileUrl = await getFilePreviewUrl(uploadedFile.$id);
      if (!fileUrl) {
        await deleteFile(uploadedFile.$id);
        throw Error;
      }
      fileUrls.push(fileUrl.toString());
      fileIds.push(uploadedFile.$id);
      // store the fileUrls and fileIds as imageMap in the database collection "imageMap"
      const storedImageMap = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.imageMapCollectionId,
        ID.unique(),
        {
          imageId: uploadedFile.$id,
          imageUrl: fileUrl,
        }
      );
      if (!storedImageMap) {
        await deleteFile(uploadedFile.$id);
        throw Error;
      }
      imageIds.push(storedImageMap.$id);
      // offer.imageMap.push({
      //   imageId: storedImageMap.imageId,
      //   imageUrl: storedImageMap.fileUrl,
      // } as unknown as File);
    }

    const storedOffer = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      ID.unique(),
      {
        ...offer,
        imageMap: imageIds,
        userId: offer.userId,
      }
    );
    console.log('storedOffer', storedOffer);

    if (!storedOffer) {
      for (const fileId of fileIds) {
        await deleteFile(fileId);
      }
      throw Error;
    }
    return storedOffer;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updateOffer(offer: IOffer) {
  try {
    const updatedOffer = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      offer.offerId,
      offer
    );
    if (!updatedOffer) throw Error;
    return updatedOffer;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentOffers() {
  try {
    const offers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(20)]
    );
    if (!offers) throw Error;
    return offers;
  } catch (error) {
    console.log(error);
  }
}

export async function getOfferById(offerId: string) {
  try {
    const offer = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      offerId
    );
    if (!offer) throw Error;
    return offer;
  } catch (error) {
    console.log(error);
  }
}

export async function getOfferByIdFromUser(userId: string, offerId: string) {
  try {
    const offer = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      offerId,
      [Query.equal('user', userId)]
    );
    if (!offer) throw Error;
    return offer;
  } catch (error) {
    console.log(error);
  }
}

export async function getInfiniteOffers({ pageParam }: { pageParam?: string }) {
  const queries = [Query.orderDesc('$updatedAt'), Query.limit(10)];
  if (pageParam) {
    queries.push(Query.cursorAfter(pageParam.toString()));
  }
  try {
    const offers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      queries
    );
    if (!offers) throw Error;
    return offers;
  } catch (error) {
    console.log(error);
  }
}

// REVIEW: search offer
export async function searchOffers(searchTerm: string) {
  const queries = [Query.search('description', searchTerm)];

  try {
    const offers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      queries
    );
    if (!offers) throw Error;
    return offers;
  } catch (error) {
    console.log(error);
  }
}

// REVIEW: get user offers by userId
export async function getUserOffers(userId: string) {
  try {
    const offers = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.offersCollectionId,
      [Query.equal('userId', userId)]
    );
    if (!offers) throw Error;
    return offers;
  } catch (error) {
    console.log(error);
  }
}
