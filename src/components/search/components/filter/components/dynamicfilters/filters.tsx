import { useEffect, useState } from 'react';
import { ByFilterContainerProps } from './filters.type';
import { searchPayloadWithRemover } from '../../../../../../context/searchContext/actions/actions.type';
import FilterShape from '../default';
import ByFilters from './byFilters';

const ByFiltersContainer = ({
  containerName,
  testName,
  relatedAction,
  params,
  data = [],
}: ByFilterContainerProps) => {
  const [loading, setLoading] = useState(true);
  const [filteredParam, setFilteredParam] = useState<string[]>([]);

  useEffect(() => {
    if (params) {
      const list = params.split(',');
      list.forEach((filterParam) => {
        relatedAction({ value: filterParam, isRemover: false });
      });
      setFilteredParam(list);
    }
    setLoading(false);
    /* eslint-disable-next-line */
  }, []);

  if (loading) {
    return <h1>...</h1>;
  }

  const setFilterContext = (value: string, isRemover: boolean): void => {
    const payload: searchPayloadWithRemover = {
      value: value,
      isRemover: isRemover,
    };
    relatedAction(payload);
  };

  return (
    <FilterShape name={containerName} testName={testName}>
      {data.map((filter) => {
        return (
          <ByFilters
            key={filter.id}
            setFilterContext={setFilterContext}
            id={filter.id}
            name={filter.name}
            slug={filter.slug}
            count={filter.count}
            testName={testName}
            isFiltered={filteredParam.includes(filter.slug)}
          />
        );
      })}
    </FilterShape>
  );
};

export default ByFiltersContainer;
