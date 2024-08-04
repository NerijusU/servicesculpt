import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useUserContext } from '@/context/AuthContext';
import { useSignOutAccount } from '@/lib/react-query/account';
import Logout from '../svgs/Logout';
import ServiceSculpt from '../svgs/ServiceSculpt';
import Login from '../svgs/Login';

const Topbar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <ServiceSculpt width={36} height={36} />
        </Link>
        <div className="flex gap-4">
          {isAuthenticated ? (
            <>
              <Button
                variant="ghost"
                className="shad-button_ghost"
                onClick={() => signOut()}
              >
                {/* <img src="/assets/icons/logout.svg" alt="logout" /> */}
                <Logout />
              </Button>
              {/* <ModeToggle /> */}
              <Link
                to={`/profile/${user?.username}`}
                className="flex-center gap-3 "
              >
                <img
                  src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
                <p>{user?.name}</p>
              </Link>
            </>
          ) : (
            <Button
              variant="ghost"
              className="shad-button_ghost"
              onClick={() => navigate('/sign-in')}
            >
              <Login />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Topbar;
