import Loader from '@/components/shared/Loader';
import { useUserContext } from '@/context/AuthContext';
import { useGetUserByUsername } from '@/lib/react-query/user';
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import BriefCase from '@/components/svgs/BriefCase';
import User from '@/components/svgs/User';
import ClipBoardList from '@/components/svgs/ClipBoardList';
import People from '@/components/svgs/People';
import Cog from '@/components/svgs/Cog';
import Edit from '@/components/svgs/Edit';
import Calendar from '@/components/svgs/Calendar';
import Customers from '../Customers';
import Offers from '../offers/Offers';
import Portfolio from '../Portfolio';
import Settings from '../Settings';

const Profile = () => {
  const { user } = useUserContext();
  const { id } = useParams();
  const { pathname } = useLocation();

  const { data: currentUser } = useGetUserByUsername(id || '');
  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              currentUser.imageUrl || '/assets/icons/profile-placeholder.svg'
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                {currentUser.name}
              </h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                {currentUser.email}
              </p>
            </div>

            <p className="small-medium md:base-medium text-center xl:text-left  max-w-screen-sm">
              {currentUser.bio}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className={`${user.id !== currentUser.$id && 'hidden'}`}>
              <Link
                to={`/update-profile/${currentUser.$id}`}
                className={`h-12 leftsidebar-link group px-5 text-light-1 flex-center gap-2 rounded-lg ${
                  user.id !== currentUser.$id && 'hidden'
                }`}
              >
                <Edit className={`group-hover:invert-white`} />
                <p className="flex whitespace-nowrap small-medium text-black dark:text-white group-hover:invert-white">
                  Edit Profile
                </p>
              </Link>
            </div>
            <div className={`${user.id === id && 'hidden'}`}>
              {/* <Button type="button" className="shad-button_primary px-8">
                Book
              </Button> */}
              <Link
                to={`/schedule`}
                className={`h-12 leftsidebar-link group px-5 text-light-1 flex-center gap-2 rounded-lg ${
                  user.id !== currentUser.$id && 'hidden'
                }`}
              >
                <Calendar className={`group-hover:invert-white`} />
                <p className="flex whitespace-nowrap small-medium text-black dark:text-white group-hover:invert-white">
                  Schedule Appointment
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col justify-items-stretch w-full">
        <Link
          to={`/profile/${id}`}
          className={`justify-self-auto profile-tab rounded-l-lg ${
            pathname === `/profile/${id}` && 'profile-tab-active'
          }`}
        >
          <User
            className={`hidden sm:block group-hover:invert-white dark:group-hover:bg-primary ${
              pathname === `/profile/${id}`
                ? 'invert-white dark:invert-black'
                : ''
            }`}
            width={20}
            height={20}
            strokeWidth={2}
          />
          <p
            className={`text-black dark:text-white ${
              pathname === `/profile/${id}`
                ? 'invert-white dark:invert-black'
                : ''
            }`}
          >
            Profile
          </p>
        </Link>
        <Link
          to={`/profile/${id}/portfolio`}
          className={`profile-tab ${
            pathname === `/profile/${id}/portfolio` && 'profile-tab-active'
          }`}
        >
          <BriefCase
            className={`hidden sm:block group-hover:invert-white dark:group-hover:bg-primary ${pathname === `/profile/${id}/portfolio` && 'invert-white dark:invert-black'}`}
            width={20}
            height={20}
            strokeWidth={2}
          />
          <p
            className={`text-black dark:text-white ${pathname === `/profile/${id}/portfolio` && 'invert-white dark:invert-black'}`}
          >
            Portfolio
          </p>
        </Link>
        <Link
          to={`/profile/${id}/offers`}
          className={`profile-tab ${currentUser.$id !== user.id && 'rounded-r-lg'} ${
            pathname === `/profile/${id}/offers` && 'profile-tab-active'
          } `}
        >
          <ClipBoardList
            className={`hidden sm:block group-hover:invert-white dark:group-hover:bg-primary ${pathname === `/profile/${id}/offers` && 'invert-white dark:invert-black'}`}
            width={20}
            height={20}
            strokeWidth={2}
          />
          <p
            className={`text-black dark:text-white ${pathname === `/profile/${id}/offers` && 'invert-white dark:invert-black'}`}
          >
            Offers
          </p>
        </Link>
        {currentUser.$id === user.id && (
          <>
            <Link
              to={`/profile/${id}/customers`}
              className={`profile-tab ${
                pathname === `/profile/${id}/customers` && 'profile-tab-active'
              }`}
            >
              <People
                className={`hidden sm:block group-hover:invert-white dark:group-hover:bg-primary ${pathname === `/profile/${id}/customers` && 'invert-white dark:invert-black'}`}
                width={20}
                height={20}
                strokeWidth={2}
              />
              <p
                className={`text-black dark:text-white ${pathname === `/profile/${id}/customers` && 'invert-white dark:invert-black'}`}
              >
                Customers
              </p>
            </Link>

            <Link
              to={`/profile/${id}/settings`}
              className={`profile-tab rounded-r-lg ${
                pathname === `/profile/${id}/settings` && 'profile-tab-active'
              }`}
            >
              <Cog
                className={`hidden sm:block group-hover:invert-white dark:group-hover:bg-primary ${pathname === `/profile/${id}/settings` && 'invert-white dark:invert-black'}`}
                width={20}
                height={20}
                strokeWidth={2}
              />
              <p
                className={`text-black dark:text-white ${pathname === `/profile/${id}/settings` && 'invert-white dark:invert-black'}`}
              >
                Settings
              </p>
            </Link>
          </>
        )}
      </div>

      <Routes>
        {/* <Route
          index
          element={<GridPostList posts={currentUser.posts} showUser={false} />}
        /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/offers" element={<Offers />} />
        {currentUser.$id === user.id && (
          <>
            {/* TODO: Do same as GridPostList */}

            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </>
        )}
      </Routes>
      <Outlet />
    </div>
  );
};

export default Profile;
