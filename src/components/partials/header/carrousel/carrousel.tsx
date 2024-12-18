import { useEffect, useRef, useState } from 'react';
import CarrouselItem from './eachCarrousel';
import { Container, Navigation } from './carrousel.style';
import { AnimatePresence } from 'framer-motion';

const images = [
  'https://blog.meninashoes.com.br/wp-content/uploads/2023/07/4-pessoas-com-oculos-de-sol.jpg',
  'https://png.pngtree.com/thumb_back/fw800/background/20240717/pngtree-wearing-sunglasses-portrait-of-twin-brothers-studio-shot-in-dark-studio-image_15879421.jpg',
  'https://www.visaohospital.com.br/wp-content/uploads/2023/03/2023-0314-Oculos-de-sol-com-grau-Blog.jpg',
];

export default function HeaderCarrousel() {
  const [index, setIndex] = useState(0);
  const secondButton = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    secondButton.current?.click();
  }, []);
  useEffect(() => {
    const carrouselInterval = setInterval(() => {
      const nextIndex = index === 2 ? 0 : index + 1;
      setIndex(nextIndex);
    }, 2000);

    return () => clearInterval(carrouselInterval);
  }, [index]);
  return (
    <Container>
      <AnimatePresence initial>
        {images.map((img, idx) => (
          <CarrouselItem
            key={idx}
            imgUrl={img}
            current={index === idx}
            imgAlt={`carrousel image 1`}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fuga explicabo eius nisi doloremque!"
          />
        ))}
      </AnimatePresence>

      <Navigation>
        <button
          onClick={() => setIndex(0)}
          className={index === 0 ? 'active' : ''}
        ></button>
        <button
          onClick={() => setIndex(1)}
          className={index === 1 ? 'active' : ''}
          ref={secondButton}
        ></button>
        <button
          onClick={() => setIndex(2)}
          className={index === 2 ? 'active' : ''}
        ></button>
      </Navigation>
    </Container>
  );
}
