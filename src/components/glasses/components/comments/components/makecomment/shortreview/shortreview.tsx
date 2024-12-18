import { useGlassesContext } from '../../../../context';
import { ProductInfo } from './shortreview.style';
import { GlassesShortReviewProps } from './shortreview.type';
import StarSelection from './stars/stars';

export default function ShortProductReview({
  ratingRef,
  colorRef,
  defaultRatingValue,
  defaultColorValue,
}: GlassesShortReviewProps) {
  const { name, color } = useGlassesContext();
  return (
    <ProductInfo>
      <div content="title">
        <h2>{name}</h2>
      </div>
      <div content="colors">
        <span>Qual foi a cor escolhida?</span>
        <select
          ref={colorRef}
          name="color"
          defaultValue={defaultColorValue}
          id="comment-color"
        >
          <option>Nenhum</option>
          {color.map((eachColor) => {
            return (
              <option
                key={eachColor.id}
                value={eachColor.id}
                data-content={`color-option-${eachColor.id}`}
                data-name={eachColor.name}
              >
                {eachColor.name}
              </option>
            );
          })}
        </select>
      </div>
      <div content="rating">
        <StarSelection
          ratingRef={ratingRef}
          defaultRatingValue={defaultRatingValue}
        />
      </div>
    </ProductInfo>
  );
}
