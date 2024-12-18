import { Container, MakeComment, Rating } from './rating.style';
import { Dispatch, memo, SetStateAction } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { ContainerTitle } from '../../../../../../settings/styles/global';
import { STARS_RATING } from '../../../../../../settings/glass/configs';
import { GlassesRatingsType } from '../../../../index.type';

const CommentRating = ({
  setOpenCommentForm,
  max,
  ratings,
}: {
  setOpenCommentForm: Dispatch<SetStateAction<boolean>>;
  max: number;
  ratings: GlassesRatingsType[];
}) => {
  const ratingList = () => {
    const arr: number[] = [];
    STARS_RATING.map((star) => {
      let value = 0;
      ratings.map((rating) => {
        if (rating.rating === star) value = rating.count;
      });
      arr.push(value);
    });
    return arr;
  };

  return (
    <Container>
      <ContainerTitle style={{ textAlign: 'center' }}>
        Avaliações dos usuários
      </ContainerTitle>
      <div className="rating-group">
        <Rating>
          {ratingList().map((rating, index) => {
            return (
              <Rate
                key={index + 1}
                level={index + 1}
                max={max}
                count={rating}
              />
            );
          })}
        </Rating>

        <MakeComment>
          <button
            onClick={() => {
              setOpenCommentForm(true);
            }}
          >
            Faça uma avaliação
          </button>
        </MakeComment>
      </div>
    </Container>
  );
};

type RateProps = {
  level: number;
  max: number;
  count: number;
};
const Rate = ({ level, max, count }: RateProps) => {
  STARS_RATING;
  return (
    <div className="container-rate">
      <div className="rate-star">
        {STARS_RATING.map((star, index) => {
          return star <= level ? (
            <FaStar key={index} />
          ) : (
            <CiStar key={index} />
          );
        })}
      </div>
      <div className="rate-progress">
        <progress max={max} value={count}></progress>
      </div>
      <div className="rate-count">{count}</div>
    </div>
  );
};

export default memo(CommentRating);
