export type FilterTypesApiData = {
  filter_1: FilterObjTypePattern[];
  filter_2: FilterObjTypePattern[];
  filter_3: FilterObjTypePattern[];
  filter_4: FilterObjTypePattern[];
  filter_5: FilterObjTypePattern[];
  amount: FilterAmountType;
};

export type FilterObjTypePattern = {
  id: number;
  name: string;
  count: number;
  slug: string;
};

export type FilterAmountType = {
  max: string;
  min: string;
};
export type FilterOrderType = 'ASC' | 'DESC' | null;

export interface FilterDataType extends FilterTypesApiData {
  params: URLSearchParams;
}

export type DataCheckedTypes = boolean | string[];
