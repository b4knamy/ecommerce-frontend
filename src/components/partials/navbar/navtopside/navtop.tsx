import { useEffect, useState } from 'react';
import Cart from './cart/cart';
import AllCategories from './categories/categories';
import {
  SiteTitle,
  NavbarTopSideContainer,
  LeftSideContent,
  RightSideContent,
} from './navtop.style';
import NavSearch from './search/search';
import NavUser from './user/user';
import { Hamburguer } from './hamburguer/hamburguer';

export default function NavbarTopSide() {
  return (
    <NavbarTopSideContainer>
      <NavLeftSide />
      <NavRightSide />
    </NavbarTopSideContainer>
  );
}

export const NavRightSide = () => {
  const [isHamburger, setIsHamburguer] = useState(false);

  useEffect(() => {
    const changeViewMode = () => {
      if (window.screen.width < 1024) {
        setIsHamburguer(true);
      } else {
        setIsHamburguer(false);
      }
    };
    changeViewMode();
    window.addEventListener('resize', changeViewMode);

    return () => window.removeEventListener('resize', changeViewMode);
  }, []);

  return (
    <RightSideContent>
      {isHamburger ? (
        <Hamburguer />
      ) : (
        <>
          <NavSearch />
          <NavUser />
          <Cart />
        </>
      )}
    </RightSideContent>
  );
};

export const NavLeftSide = () => {
  return (
    <LeftSideContent>
      <SiteTitle>Óculos de Fábrica</SiteTitle>
      <AllCategories />
    </LeftSideContent>
  );
};
