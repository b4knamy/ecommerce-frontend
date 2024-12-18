import { useLocation } from 'react-router-dom';
import {
  Container,
  UserNavigation,
  UserNavOptions,
  UserPageContainer,
} from './index.style';
import { Dispatch, SetStateAction, useState } from 'react';
import UserProfile from './profile/profile';
import UserOrders from './orders/orders';
import UserChangePassword from './changepwd/change';

const UserPage = () => {
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState(state?.page || 'perfil');
  return (
    <Container>
      <UserNavigation>
        <UserNavigate
          page="pedidos"
          navName="Meus pedidos"
          setCurrentPage={setCurrentPage}
          isCurrent={currentPage === 'pedidos'}
        />
        <UserNavigate
          page="perfil"
          navName="Perfil"
          setCurrentPage={setCurrentPage}
          isCurrent={currentPage === 'perfil'}
        />
        <UserNavigate
          page="mudar-senha"
          navName="Trocar senha"
          setCurrentPage={setCurrentPage}
          isCurrent={currentPage === 'mudar-senha'}
        />
      </UserNavigation>
      <div className="separator"></div>
      <UserPageContainer>
        <UserOrders isCurrent={currentPage === 'pedidos'} />
        <UserProfile isCurrent={currentPage === 'perfil'} />
        <UserChangePassword isCurrent={currentPage === 'mudar-senha'} />
      </UserPageContainer>
    </Container>
  );
};

const UserNavigate = ({
  page,
  navName,
  setCurrentPage,
  isCurrent,
}: UserNavigateProps) => {
  return (
    <UserNavOptions
      onClick={() => setCurrentPage(page)}
      $current={isCurrent ? 'true' : ''}
    >
      <span>{navName}</span>
    </UserNavOptions>
  );
};
type UserNavigateProps = {
  page: string;
  navName: string;
  setCurrentPage: Dispatch<SetStateAction<string | undefined>>;
  isCurrent: boolean;
};
export default UserPage;
