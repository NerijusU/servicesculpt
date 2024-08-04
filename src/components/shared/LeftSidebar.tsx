import { sidebarLinks } from '@/constants';
import { useIsAuthenticated, useUserContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSignOutAccount } from '@/lib/react-query/account';
import Cog from '../svgs/Cog';
import Logout from '../svgs/Logout';
import ServiceSculpt from '../svgs/ServiceSculpt';
import Login from '../svgs/Login';

const LeftSidebar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  // TODO: distinguish between authenticated and not and render different links

  const { user, isAuthenticated } = useUserContext();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess]);
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <ServiceSculpt width={36} height={36} />
          <p>ServiceSculpt</p>
        </Link>
        <Link
          to={`/profile/${user?.username}`}
          className="flex gap-3 items-center"
        >
          <img
            src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
            alt="profile"
            className="h-8 w-8 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user?.name}</p>
            <p className="small-regular text-light-4">{user?.email}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map(link => {
            const isActive = pathname === link.route;
            const IconComponent = link.icon;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${isActive && 'bg-primary'}`}
              >
                <NavLink
                  to={link.route}
                  key={link.label}
                  className="flex gap-4 items-center p-4"
                >
                  <IconComponent
                    className={`group-hover:invert-white ${isActive && 'invert-white'}`}
                    fill="none"
                  />
                  <p
                    className={`group-hover:invert-white ${isActive && 'invert-white'}`}
                  >
                    {link.label}
                  </p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* TODO: fix hover behavior on settings and logout */}
      {isAuthenticated ? (
        <>
          <li key={'navlink-settings'} className={`leftsidebar-link group`}>
            <NavLink
              to={'/profile/' + user?.username + '/settings'}
              key={'Settings'}
              className="flex gap-4 items-center p-4 group-hover:invert-white "
            >
              <Cog className="`group-hover:invert-white`" fill="none" />
              Settings
            </NavLink>
          </li>

          <li key={'navlink-logout'} className={`leftsidebar-link group`}>
            <NavLink
              to={''}
              className="flex gap-4 items-center p-4 group-hover:invert-white"
              onClick={() => signOut()}
            >
              <Logout className="group-hover:invert-white" fill="none" />
              <p className="small-medium lg:base-medium">Logout</p>
            </NavLink>
          </li>
        </>
      ) : (
        <li key={'navlink-logout'} className={`leftsidebar-link group`}>
          <NavLink
            to={'/sign-in'}
            className="flex gap-4 items-center p-4 group-hover:invert-white"
          >
            <Login className="group-hover:invert-white" fill="none" />
            <p className="small-medium lg:base-medium">Login</p>
          </NavLink>
        </li>
      )}
    </nav>
  );
};

export default LeftSidebar;
