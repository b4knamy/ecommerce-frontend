import GlassesInformation from './information/information';
import { Content } from '../index.style';
import { GlassesImageView } from './images/image';
import GlassesDescription from './description/description';
import { useGlassesContext } from './context';

const AllGlassesInformations = () => {
  const {
    id,
    name,
    amount,
    installments_amount,
    installments_count,
    color,
    slug,
    images,
    final_amount,
    is_promo,
    discount,
  } = useGlassesContext();

  return (
    <>
      <Content>
        {images ? (
          // @ts-ignore
          <GlassesImageView images={images} />
        ) : (
          <h1>no image found</h1>
        )}
        <GlassesInformation
          key={id}
          name={name}
          amount={amount}
          installments_amount={installments_amount}
          installments_count={installments_count}
          color={color}
          slug={slug}
          images={images[0]}
          final_amount={final_amount}
          is_promo={is_promo}
          discount={discount}
        />
      </Content>
      <GlassesDescription />
    </>
  );
};

export default AllGlassesInformations;
