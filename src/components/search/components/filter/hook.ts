import { useEffect, useState } from 'react';
import { FilterDataType, FilterTypesApiData } from './filter.type';

export default function useSearchHook(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState<FilterDataType>({
    filter_1: [],
    filter_2: [],
    amount: {
      min: '',
      max: '',
    },
    filter_3: [],
    filter_4: [],
    filter_5: [],
    params: new URLSearchParams(window.location.search),
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch filters type');
        }
        const data: FilterTypesApiData = await response.json();
        setFilterData((prev) => {
          return {
            ...prev,
            filter_1: data.filter_1,
            filter_2: data.filter_2,
            amount: data.amount,
            filter_3: data.filter_3,
            filter_4: data.filter_4,
            filter_5: data.filter_5,
          };
        });
      } catch (err) {}
    };
    getData().then(() => {
      setIsLoading(false);
    });
    /* eslint-disable-next-line */
  }, []);

  return {
    isLoading: isLoading,
    filterData: filterData,
  };
}
