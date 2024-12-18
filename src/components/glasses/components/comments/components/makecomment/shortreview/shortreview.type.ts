import { MutableRefObject } from 'react';

export type GlassesShortReviewProps = {
  ratingRef: MutableRefObject<HTMLDivElement | null>;
  colorRef: MutableRefObject<HTMLSelectElement | null>;
  defaultRatingValue: number | null;
  defaultColorValue: string | undefined;
};
