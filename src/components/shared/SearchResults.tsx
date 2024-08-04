import { Models } from 'appwrite';
import React from 'react';
import Loader from './Loader';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts?: Models.DocumentList<Models.Document>;
};
const SearchResults = ({
  isSearchFetching,
  // searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) {
    return <Loader />;
  }
  // if (searchedPosts && searchedPosts?.documents.length > 0) {
  //   return <GridPostList posts={searchedPosts.documents} showUser showStats />;
  // }
  return (
    <p className="text-light-4 mt-4 text-center w-full">No results found</p>
  );
};

export default SearchResults;
