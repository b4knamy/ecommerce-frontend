import { Dispatch, SetStateAction } from 'react';

export const starOnMouseHandler =
  (setter: Dispatch<SetStateAction<number | null>>, star: number | null) =>
  () => {
    setter(star);
  };

export const starOnClickHandler =
  (
    setRate: Dispatch<SetStateAction<number | null>>,
    star: number,
  ) =>
  () => {
    setRate(star);
  };
