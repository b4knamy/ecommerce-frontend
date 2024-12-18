import { createContext, useContext, useEffect, useState } from 'react';
import {
  postChangePasswordArgs,
  postUpdateDataArgs,
  userContextDataType,
  UserProfileContextProps,
} from './context.type';
import { useNavigate, useParams } from 'react-router-dom';
import useAuthContext from '../../../context/authContext/context/context';
import UserPage from '..';
import { ChildrenComponentNode } from '../../helpers/types/types';
import useSettings from '../../../context/settingsContext/context';
import Loading from '../../../animations/productsLoading/loading';

export default function User() {
  return (
    <UserProfileContextProvider>
      <UserPage />
    </UserProfileContextProvider>
  );
}

// @ts-ignore-next-line
// make sure if context is null, return something related to it.
const UserProfileContext = createContext<userContextDataType>(null);

export const useUserProfileContext = () => {
  const context = useContext(UserProfileContext);

  if (!context) {
    throw new Error(
      'useUserProfileContext must be used inside UserProfileContextProvider.',
    );
  }
  return context;
};

export const UserProfileContextProvider = ({
  children,
}: ChildrenComponentNode) => {
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  const { api } = useSettings();

  // @ts-ignore-next-line
  const [userData, setUserData] = useState<UserProfileContextProps>(null);
  const { user, actions } = useAuthContext();

  useEffect(() => {
    const fetchUserDataOrNavigateOut = async () => {
      try {
        const response = await fetch(api.user_profile + slug, {
          headers: {
            Authorization: 'Bearer ' + user.token?.access || '',
          },
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }
        if (response.status === 401) {
          navigate('/', { replace: true });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDataOrNavigateOut();
  }, [user.isAuthenticated]);

  if (slug === undefined) {
    navigate('/', { replace: true });
  }

  const postResetCode = async () => {
    const response = await fetch(api.reset_code, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Authorization: 'Bearer ' + user.token?.access,
      },
    });
    return response;
  };

  const postChangePassword = async (data: postChangePasswordArgs) => {
    const response = await fetch(api.change, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token?.access,
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    return response;
  };
  const postUpdateData = async (
    data: postUpdateDataArgs,
    currentSlug: string,
  ) => {
    const response = await fetch(api.user_profile + currentSlug, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user.token?.access,
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });

    return response;
  };

  const deleteUser = async (slug: string) => {
    const response = await fetch(api.user_profile + slug, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token?.access || ''}`,
      },
      credentials: 'include',
    });

    if (response.ok) {
      actions.logOut();
    }
  };

  const userContextData: userContextDataType = {
    data: userData,
    postChangePassword,
    postResetCode,
    postUpdateData,
    deleteUser,
  };
  return (
    <UserProfileContext.Provider value={userContextData}>
      {isLoading ? <Loading /> : children}
    </UserProfileContext.Provider>
  );
};
