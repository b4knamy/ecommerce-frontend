import { SyntheticEvent, useEffect, useRef } from 'react';
import { scrollUpWhenNav, urlPageNumberResolver } from '../../utils';

export default function useNavigationHook(
  getProducts: (query: string) => void,
  page: number,
) {
  const productsElement = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    scrollUpWhenNav();
    getProducts(location.search);
    /* eslint-disable-next-line */
  }, []);

  const searchNavClickHandler = (event: SyntheticEvent) => {
    scrollUpWhenNav();
    const nextPage = event.currentTarget.getAttribute('data-target') || '1';
    if (page == Number(nextPage)) {
      return;
    }
    const query = urlPageNumberResolver(nextPage);
    getProducts(query);
    scrollUpWhenNav();
    return;
  };

  return {
    searchNavClickHandler,
    productsElement,
  };
}
