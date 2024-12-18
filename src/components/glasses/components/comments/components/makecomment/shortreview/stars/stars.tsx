import { useState } from 'react';
import { STARS_RATING } from '../../../../../../../../settings/glass/configs';
import { StarSelectionProps } from './stars.type';
import { starOnClickHandler, starOnMouseHandler } from './helpers';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

export default function StarSelection({
  ratingRef,
  defaultRatingValue,
}: StarSelectionProps) {
  const [rate, setRate] = useState(defaultRatingValue);
  const [hover, setHover] = useState(rate);
  return (
    <>
      <span>Qual é a sua avaliação?</span>
      <div data-selected={rate} ref={ratingRef}>
        {STARS_RATING.map((star) => {
          return hover === null || star > hover ? (
            <CiStar
              key={star}
              onMouseEnter={starOnMouseHandler(setHover, star)}
              onMouseLeave={starOnMouseHandler(setHover, rate)}
              onClick={starOnClickHandler(setRate, star)}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <FaStar
              key={star}
              onMouseEnter={starOnMouseHandler(setHover, star)}
              onMouseLeave={starOnMouseHandler(setHover, rate)}
              onClick={starOnClickHandler(setRate, star)}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </div>
      {rate !== null ? (
        <span>
          Sua avaliação foi de {rate} {rate === 1 ? 'Estrela' : 'Estrelas'}!
        </span>
      ) : (
        <></>
      )}
    </>
  );
}
