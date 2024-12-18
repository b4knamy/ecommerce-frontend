import { FaUser, FaUserCheck } from 'react-icons/fa';
import { Container } from './window.style';
import { ReactNode } from 'react';
import { SettingsContainer } from './status.style';
import { AnimatePresence } from 'framer-motion';

const NavUserWindow = ({ isUserAuthenticated }: NavUserWindowProps) => {
  return (
    <Container>{isUserAuthenticated ? <FaUserCheck /> : <FaUser />}</Container>
  );
};

export function UserStatus({ children }: props) {
  return (
    <AnimatePresence>
      <SettingsContainer>{children}</SettingsContainer>
    </AnimatePresence>
  );
}

type props = {
  children: ReactNode;
};

type NavUserWindowProps = {
  isUserAuthenticated: boolean;
};

export default NavUserWindow;
