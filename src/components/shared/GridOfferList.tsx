import { Models } from 'appwrite';
import { Link, NavLink, useParams } from 'react-router-dom';

import { useUserContext } from '@/context/AuthContext';
import { ImageMap } from '@/types';
import GalleryAdd from '../svgs/GalleryAdd';

type GridOfferListProps = {
  offers: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridPostList = ({
  offers,
  showUser = true,
  showStats = true,
}: GridOfferListProps) => {
  const { user } = useUserContext();
  const { id } = useParams();
  console.log(offers);
  if (!offers || offers.length < 1)
    return (
      <ul className="common-container">
        <p className="mall-medium text-black dark:text-white">
          {'Looks empty here :('}
        </p>
        {user?.username === id && (
          <div>
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
        )}
      </ul>
    );

  return (
    <ul className="grid-container">
      {offers.map(offer => (
        <li key={offer.$id} className="relative min-w-80 h-80">
          <Link to={`/offers/${offer.$id}`} className="grid-offer_link">
            <img
              src={offer.imageMap[0]?.imageUrl}
              // alt="offer"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-offer_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                {/* <img
                  src={
                    offer.imageMap[0]?.imageUrl ||
                    '/assets/icons/profile-placeholder.svg'
                  }
                  alt="creator"
                  className="w-8 h-8 rounded-full"
                /> */}
                <p className="line-clamp-1 text-white">{offer.title}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
