import { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '@/types';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/lib/appwrite/userApi';
type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

export const INITIAL_USER = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
  bio: '',
  offers: [],
  customers: [],
  appointments: [],
  company: {
    id: '',
    name: '',
    email: '',
    phone: '',
    imageUrl: '',
    bio: '',
    offers: [],
    customers: [],
    appointments: [],
  },
};

export const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const navigate = useNavigate();
  /**
   * A function that checks the authentication of the user.
   *
   * @return {Promise<boolean>} true if the user is authenticated, false otherwise
   */
  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
          offers: currentAccount.offers,
          customers: currentAccount.customers,
          appointments: currentAccount.appointments,
          company: currentAccount.companies,
        });
        setIsAuthenticated(true);
        return true;
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // if (
    //   localStorage.getItem('cookieFallback') === '[]' ||
    //   localStorage.getItem('cookieFallback') === null
    // ) {
    //   navigate('/sign-in');
    // }
    checkAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        checkAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated;
};

export const useIsLoading = () => {
  const { isLoading } = useUserContext();
  return isLoading;
};

export const useUser = () => {
  const { user } = useUserContext();
  return user;
};

export const useSetUser = () => {
  const { setUser } = useUserContext();
  return setUser;
};

export const useSetIsAuthenticated = () => {
  const { setIsAuthenticated } = useUserContext();
  return setIsAuthenticated;
};

export const useCheckAuthUser = () => {
  const { checkAuthUser } = useUserContext();
  return checkAuthUser;
};

export const useLogout = () => {
  const { setIsAuthenticated } = useUserContext();
  return () => setIsAuthenticated(false);
};
