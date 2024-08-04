// import OfferForm from '@/components/forms/PostForm';
// import Loader from '@/components/shared/Loader';
// import { useGetPostById } from '@/lib/react-query/queriesAndMutation';
// import { useParams } from 'react-router-dom';

// const EditOffer = () => {
//   const { id } = useParams();
//   const { data: post, isPending } = useGetPostById(id || '');

//   if (isPending) {
//     return <Loader />;
//   }
//   return (
//     <div className="flex flex-1">
//       <div className="common-container">
//         <div className="max-w-5xl flex-start gap-3 justify-start w-full">
//           <img
//             src="/assets/icons/add-post.svg"
//             alt="create-post"
//             width={24}
//             height={24}
//           />
//           <h2 className="h-3-bold md:h2-bold text-left w-full">Edit Post</h2>
//         </div>
//         <OfferForm action="Update" post={post} />
//       </div>
//     </div>
//   );
// };

// export default EditOffer;
import React from 'react';

const EditOffer = () => {
  // TODO: is authenticated === true ? <EditOffer /> : <Home />
  // const { id } = useParams();
  // id belongs to users offerId ? <EditOffer /> : <Home />
  return <div className="common-container">EditOffer</div>;
};

export default EditOffer;
