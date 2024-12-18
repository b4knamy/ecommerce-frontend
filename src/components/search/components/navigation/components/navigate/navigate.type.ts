import { SyntheticEvent } from 'react';

export type SearchNavigationProps = {
  page: number;
  last: number;
  searchNavClickHandler: (e: SyntheticEvent) => void;
};

export type EachNaveProps = {
  is_current: boolean;
  page: number;
  searchNavClickHandler: (e: SyntheticEvent) => void;
};
