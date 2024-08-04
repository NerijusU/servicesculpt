import { Models } from 'appwrite';
import { Link } from 'react-router-dom';

import { multiFormatDateString } from '@/lib/utils';
import { useUserContext } from '@/context/AuthContext';

type OfferCardProps = {
  offer: Models.Document;
};

const OfferCard = ({ offer }: OfferCardProps) => {
  const { user } = useUserContext();

  if (!offer.creator) return;

  return (
    <div className="offer-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${offer.creator.$id}`}>
            <img
              src={
                offer.creator?.imageUrl ||
                '/assets/icons/profile-placeholder.svg'
              }
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {offer.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                {multiFormatDateString(offer.$createdAt)}
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                {offer.location}
              </p>
            </div>
          </div>
        </div>

        <Link
          to={`/update-offer/${offer.$id}`}
          className={`${user.id !== offer.creator.$id && 'hidden'}`}
        >
          <img
            src={'/assets/icons/edit.svg'}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link to={`/offers/${offer.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{offer.caption}</p>
          <ul className="flex gap-1 mt-2">
            {offer.tags.map((tag: string, index: string) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={offer.imageUrl || '/assets/icons/profile-placeholder.svg'}
          alt="offer image"
          className="offer-card_img"
        />
      </Link>

      {/* <PostStats offer={offer} userId={user.id} /> */}
    </div>
  );
};

export default OfferCard;
