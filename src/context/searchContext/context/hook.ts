import { useCallback, useState } from 'react';
import { SearchNavContentInterface } from '../../../components/search/components/navigation/navigation.type';
import useSettings from '../../settingsContext/context';

const useSearchProvider = () => {
  const { api } = useSettings();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<SearchNavContentInterface>({
    products: [],
    count: 0,
    last: 1,
    page: 1,
  });

  const getProducts = useCallback(async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(api.products + query);
      if (response.ok) {
        const data: SearchNavContentInterface = await response.json();
        setContent({
          products: data.products,
          count: data.count,
          last: data.last,
          page: data.page,
        });
        history.replaceState({}, '', location.pathname + query);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { content, getProducts, isLoading };
};

export default useSearchProvider;
