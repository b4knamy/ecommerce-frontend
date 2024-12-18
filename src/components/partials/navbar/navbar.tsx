import { memo } from 'react';
import * as S from './navbar.style';
import NavbarTopSide from './navtopside/navtop';
import CartAddedAnimation from '../../../animations/cartAdd /cartAdd';
import CartSideBar from '../cartsidebar/sidebar';

const Navbar = () => {
  return (
    <S.NavbarContainer content="navbar">
      <NavbarTopSide />
      <CartSideBar />
      <CartAddedAnimation />
    </S.NavbarContainer>
  );
};

export default memo(Navbar);
