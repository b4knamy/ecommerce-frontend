import { useEffect, useRef, useState } from 'react';
import { Container, NavContent } from './hamburguer.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import NavSearch from '../search/search';
import NavUser from '../user/user';
import Cart from '../cart/cart';
const variants = {
  close: { maxHeight: 0, paddingBottom: 0, overflow: 'hidden' },
  open: { maxHeight: 2000, paddingBottom: 50, overflow: 'unset' },
};

export function Hamburguer() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // @ts-ignore
    const outSideClickHandler = (e) => {
      if (
        !containerRef.current?.contains(e.target) &&
        open &&
        containerRef.current
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', outSideClickHandler);
    return () => document.removeEventListener('click', outSideClickHandler);
  }, [open]);

  return (
    <Container ref={containerRef} onClick={(e) => e.stopPropagation()}>
      {open ? (
        <MdClose
          className="nav-hamburguer"
          onClick={() => {
            setOpen(false);
          }}
        />
      ) : (
        <GiHamburgerMenu
          className="nav-hamburguer"
          onClick={() => {
            setOpen(true);
          }}
        />
      )}

      <NavContent
        variants={variants}
        initial="close"
        animate={open ? 'open' : 'close'}
        exit="close"
      >
        <NavSearch />
        <NavUser />
        <Cart />
      </NavContent>
    </Container>
  );
}
