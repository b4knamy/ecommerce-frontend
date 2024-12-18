import { useEffect, useState } from 'react';
import { ImageType } from '../../../../home/components/pricing/pricing.type';
import useSettings from '../../../../../context/settingsContext/context';

export type NavSearchApiProps = {
  slug: string;
  name: string;
  id: number;
  images: ImageType | null;
  amount: string;
  quantitaty: number;
};

export type QueryDataProps = {
  page: number;
  data: NavSearchApiProps[];
  limit: number;
  count: number;
};

type SearchApiProps = {
  last: number;
  products: NavSearchApiProps[];
  count: number;
};
export default function useDynamicSearch() {
  const { api } = useSettings();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<QueryDataProps>({
    count: 0,
    page: 1,
    data: [],
    limit: 5,
  });
  const [query, setQuery] = useState('');
  const [oldQuery, setOldQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const getRelatedSearchDataTimeOut = setTimeout(async () => {
      if (query.length <= 0) {
        setSearch({
          page: 1,
          data: [],
          limit: 1,
          count: 0,
        });
        setIsLoading(false);
        return;
      }
      const isChanged = oldQuery !== query;
      const nextPage = isChanged ? 1 : search.page;

      const response = await fetch(
        api.dynamic_search + `?query=${query}&page=${nextPage}`,
      );
      if (response.ok) {
        const search_data: SearchApiProps = await response.json();
        setSearch((prev) => {
          let products;
          let newSearchObject;
          if (isChanged) {
            products = search_data.products;
            newSearchObject = {
              ...prev,
              data: products,
              page: 1,
              count: search_data.count,
              limit: search_data.last,
            };
          } else {
            products = [...prev.data, ...search_data.products];
            newSearchObject = {
              ...prev,
              data: products,
              count: search_data.count,
              limit: search_data.last,
            };
          }
          return newSearchObject;
        });
      }
      setIsLoading(false);
    }, 1500);

    if (query) return () => clearTimeout(getRelatedSearchDataTimeOut);
  }, [query, search.page]);

  const getNextPageQuery = () => {
    setOldQuery(query);
    setSearch((prev) => {
      return { ...prev, page: search.page + 1 };
    });
  };
  return {
    isLoading,
    query,
    setQuery,
    search,
    getNextPageQuery,
  };
}
