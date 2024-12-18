import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { UserContainer } from './user.style';
import NavUserWindow, { UserStatus } from './options/window/window';
import useAuthContext from '../../../../../context/authContext/context/context';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import UserOnline from './options/window/on/on';
import UserOffline from './options/window/off/off';
import { UserInfo } from '../../../../../context/authContext/context/context.type';
import { Options } from './options/window/status.style';
import { AnimationControls, useAnimation } from 'framer-motion';
import { Auth } from '../../../../account/partials/account';
import { logOutUser } from '../../../../helpers/functions/api/api';
import useSettings from '../../../../../context/settingsContext/context';

const variants = {
  hidden: { opacity: 0, maxHeight: 0, display: 'none' },
  open: { opacity: 1, maxHeight: 800, display: 'flex' },
};

const NavUser = () => {
  const { user, actions } = useAuthContext();
  const { api } = useSettings();
  const [openAuth, setOpenAuth] = useState<openAuthProps>({
    isOpen: false,
    mode: 'login',
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const onClicksOutside = (e: MouseEvent) => {
      // @ts-ignore
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        controls.start('hidden');
      }
    };
    document.addEventListener('click', onClicksOutside);

    return () => document.removeEventListener('click', onClicksOutside);
  }, []);

  const foreignSetterHandler = () => {
    setOpenAuth({
      isOpen: false,
      mode: 'login',
    });
  };

  return (
    <UserContainer onClick={() => controls.start('open')} ref={containerRef}>
      <NavUserWindow isUserAuthenticated={user.isAuthenticated} />

      {openAuth.isOpen ? (
        <Auth
          foreignSetterHandler={foreignSetterHandler}
          mode={openAuth.mode}
        />
      ) : (
        <Options
          variants={variants}
          initial="hidden"
          animate={controls}
          exit="hidden"
          transition={{ duration: 0.5, type: 'easeInOut' }}
          layout
        >
          <UserStatus>
            {user.isAuthenticated ? (
              <UserOnline
                navigate={navigate}
                /* @ts-ignore-next-line */
                user={user.info}
                logOut={() => {
                  logOutUser(api.logout);
                  actions.logOut();
                }}
                controls={controls}
              />
            ) : (
              <UserOffline setOpenAuth={setOpenAuth} />
            )}
          </UserStatus>
        </Options>
      )}
    </UserContainer>
  );
};

export type openAuthProps = {
  isOpen: boolean;
  mode: 'register' | 'login';
};

export type NavUserActionsProps = {
  setShowMore: Dispatch<SetStateAction<boolean>>;
};

export type UserOffProps = {
  setOpenAuth: Dispatch<SetStateAction<openAuthProps>>;
};
export interface UserOnProps extends UserOffProps {
  slug: string;
  user: UserInfo;
  logOut: () => void;
  controls: AnimationControls;
  navigate: NavigateFunction;
}

export default NavUser;
