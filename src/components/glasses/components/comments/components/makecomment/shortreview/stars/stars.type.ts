import { MutableRefObject } from 'react';

export type StarSelectionProps = {
  ratingRef: MutableRefObject<HTMLDivElement | null>
  defaultRatingValue: number | null;
};
