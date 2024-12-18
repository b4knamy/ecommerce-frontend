import { searchPayloadWithRemover } from '../../../../../../context/searchContext/actions/actions.type';
import { FilterObjTypePattern } from '../../filter.type';

export type ByFilterContainerProps = {
  data: FilterObjTypePattern[];
  containerName: string
  testName: string
  params: string | null;
  relatedAction: (payload: searchPayloadWithRemover) => void
};

export interface ByFilterProps extends FilterObjTypePattern {
  isFiltered: boolean;
  testName: string
  setFilterContext: (value: string, isRemover: boolean) => void;
};
