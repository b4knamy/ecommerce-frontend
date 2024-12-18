import { useRef, useState } from 'react';
import ImagesViewer, { ImageView } from './components/viewer';
import { ImagesContainer, CurrentImage } from './image.style';
import useSettings from '../../../../context/settingsContext/context';
import img1 from '../../../../assets/default_img_1.png';
import img2 from '../../../../assets/default_img_2.png';
import img3 from '../../../../assets/default_img_3.jpg';
import img4 from '../../../../assets/default_img_4.jpeg';
import img5 from '../../../../assets/default_img_5.jpg';
import img6 from '../../../../assets/default_img_6.png';
import img7 from '../../../../assets/default_img_7.jpg';

const imgGroup = [
  {
    url: img1,
    description: 'default image 1',
    id: 1,
  },
  {
    url: img2,
    description: 'default image 2',
    id: 2,
  },
  {
    url: img3,
    description: 'default image 3',
    id: 3,
  },
  {
    url: img4,
    description: 'default image 4',
    id: 4,
  },
  {
    url: img5,
    description: 'default image 5',
    id: 5,
  },
  {
    url: img6,
    description: 'default image 6',
    id: 6,
  },
  {
    url: img7,
    description: 'default image 7',
    id: 7,
  },
];

export function GlassesImageView() {
  const imagesGroup = imgGroup;
  // const [primaryImage, setPrimaryImage] = useState(images[0] || null);
  const [primaryImage, setPrimaryImage] = useState(imagesGroup[0]);
  const { settings } = useSettings();

  return (
    <ImagesContainer data-testid="__images_viewer_container">
      {primaryImage !== null ? (
        <>
          <PrimaryImageView
            url={primaryImage.url}
            description={primaryImage.description}
          />
          <ImagesViewer
            // @ts-ignore
            primaryImage={primaryImage}
            // @ts-ignore
            images={imagesGroup}
            // @ts-ignore
            setPrimaryImage={setPrimaryImage}
          />
        </>
      ) : (
        <>
          <CurrentImage>
            <ImageView
              isComment={false}
              url={settings.default_image_url}
              description="Não há imagem"
            />
          </CurrentImage>
        </>
      )}
    </ImagesContainer>
  );
}
type PIV = {
  url: string;
  description: string;
};
function PrimaryImageView({ url, description }: PIV) {
  const [isActiveWatcher, setIsActiveWatcher] = useState(false);

  const imgRef = useRef<HTMLImageElement | null>(null);
  // @ts-ignore
  const handleMouseMove = (e) => {
    if (isActiveWatcher) {
      const { clientX, clientY, currentTarget } = e;

      const { width, height, left, top } =
        currentTarget.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 150;
      const y = ((clientY - top) / height - 0.5) * 150;

      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
      }
    } else {
      if (imgRef.current) {
        imgRef.current.style.transform = `none`;
      }
    }
  };

  return (
    <CurrentImage
      $isActiveWatcher={isActiveWatcher}
      data-testid="__primary_image"
      onClick={() => setIsActiveWatcher(true)}
      onMouseLeave={() => setIsActiveWatcher(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        // src={SERVER_MEDIA_URL + url}
        src={url}
        alt={description}
        data-testid={`__image_profile_view`}
      />
    </CurrentImage>
  );
}
