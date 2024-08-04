import GridOfferList from '@/components/shared/GridOfferList';
import Calendar from '@/components/svgs/Calendar';
import GalleryAdd from '@/components/svgs/GalleryAdd';
import { useUserContext } from '@/context/AuthContext';
import { useGetUserOffers } from '@/lib/react-query/offer';
import {
  useGetUserByUsername,
  useGetUserIdByUsername,
} from '@/lib/react-query/user';
import { Link, useParams } from 'react-router-dom';

const Offers = () => {
  const { user } = useUserContext();

  const { id } = useParams();

  const { data: userId } = useGetUserIdByUsername(id ?? '');
  const { data: offers } = useGetUserOffers(userId ?? '');

  if (!offers) return null;
  return (
    <>
      {/* {offers.length === 0 && (
        <p className="text-light-4">No offers available</p>
      )} */}

      <GridOfferList offers={offers.documents} showStats={false} />
      <div className={`${user.id === id && 'hidden'}`}>
        <Link
          to={`/create-offer`}
          className={`h-12 leftsidebar-link group px-5 text-light-1 flex-center gap-2 rounded-lg`}
        >
          <GalleryAdd className={`group-hover:invert-white`} />
          <p className="flex whitespace-nowrap small-medium text-black dark:text-white group-hover:invert-white">
            Create Offer
          </p>
        </Link>
      </div>
    </>
  );
};

export default Offers;
