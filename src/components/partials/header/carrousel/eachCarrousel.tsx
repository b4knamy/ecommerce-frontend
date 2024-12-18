import { CarrouselContainer, CarrouselText } from './carrousel.style';
import { div } from 'framer-motion/client';

const variants = {
  open: { x: ['100%', 0] },
  close: { x: [0, '-100%'] },
};

export default function CarrouselItem({
  imgUrl,
  imgAlt,
  text,
  current,
}: props) {
  return (
    <CarrouselContainer
      as={div}
      variants={variants}
      initial="open"
      animate={current ? 'open' : 'close'}
      exit="close"
      transition={{ duration: 0.4 }}
      layout
    >
      <img src={imgUrl} alt={imgAlt} />
      <CarrouselText>
        <span>{text}</span>
      </CarrouselText>
    </CarrouselContainer>
  );
}

type props = {
  imgUrl: string;
  imgAlt: string;
  text: string;
  current: boolean;
};
