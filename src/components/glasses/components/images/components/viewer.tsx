import { useEffect, useRef, useState } from 'react';
import {
  ImageViewerContainer,
  ImagePusher,
  ImageOptions,
  ImageOption,
} from './viewer.style';
import { ImageViewerType, ImageViewType } from '../image.type';
import { hidePush, showPush } from './helpers';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export default function ImagesViewer({
  primaryImage,
  setPrimaryImage,
  images,
}: ImageViewerType) {
  const first = useRef<HTMLDivElement | null>(null);
  const rightPush = useRef<HTMLDivElement>(null);
  const leftPush = useRef<HTMLDivElement>(null);
  const [pattern, setPattern] = useState({
    firstLimit: 0,
    lastLimit: (images.length - 6) * -100,
    isLower: images.length < 6,
  });

  useEffect(() => {
    const patternHandler = () => {
      const currentWidth = window.screen.width;
      if (currentWidth >= 768 && currentWidth < 1024) {
        setPattern((prev) => {
          return {
            ...prev,
            isLower: images.length < 4,
            lastLimit: (images.length - 4) * -100,
          };
        });
      } else if (currentWidth > 520 && currentWidth < 768) {
        setPattern((prev) => {
          return {
            ...prev,
            isLower: images.length < 5,
            lastLimit: (images.length - 5) * -100,
          };
        });
      } else if (currentWidth > 0 && currentWidth < 519) {
        setPattern((prev) => {
          return {
            ...prev,
            isLower: images.length < 3,
            lastLimit: (images.length - 3) * -100,
          };
        });
      } else {
        setPattern((prev) => {
          return {
            ...prev,
            lastLimit: (images.length - 6) * -100,
            isLower: images.length < 6,
          };
        });
      }
    };

    patternHandler();

    window.addEventListener('resize', patternHandler);

    return () => window.removeEventListener('resize', patternHandler);
  }, []);

  useEffect(() => {
    const { firstLimit, lastLimit, isLower } = pattern;
    if (!isLower) {
      let valueInit = 0; /* a value that will change related to the user behavior */

      const left = leftPush.current;
      if (left) left.style.visibility = 'hidden';
      const right = rightPush.current;
      if (first.current) {
        first.current.style.marginLeft = '0px';
      }

      showPush(right);

      const rightHandler = () => {
        if (valueInit <= lastLimit) {
          return;
        }
        showPush(left);

        valueInit -= 100;

        if (first.current instanceof HTMLDivElement) {
          first.current.style.marginLeft = `${valueInit}px`;
        }

        if (valueInit === lastLimit) {
          hidePush(right);
        }
      };
      const leftHandler = () => {
        if (valueInit >= firstLimit) {
          hidePush(left);
          return;
        }
        showPush(right);
        valueInit += 100;
        if (first.current instanceof HTMLDivElement) {
          first.current.style.marginLeft = `${valueInit}px`;
        }

        if (valueInit >= firstLimit) {
          hidePush(left);
        }
      };

      right?.addEventListener('click', rightHandler);

      left?.addEventListener('click', leftHandler);

      return () => {
        right?.removeEventListener('click', rightHandler);
        left?.removeEventListener('click', leftHandler);
      };
    }
  }, [pattern]);
  return (
    <>
      <ImageViewerContainer>
        {!pattern.isLower && (
          <ImagePusher
            $data="left"
            data-testid="__arrow_view_left"
            ref={leftPush}
          >
            <SlArrowLeft />
          </ImagePusher>
        )}
        <ImageOptions
          $width={pattern.isLower ? 1 : 0}
          data-testid="__viewer_container"
        >
          {images.map((image) => {
            if (image) {
              return (
                <ImageOption
                  ref={image === images[0] ? first : null}
                  key={image.id}
                  onClick={() => {
                    setPrimaryImage(image);
                  }}
                  $isprimary={primaryImage === image ? 1 : 0}
                >
                  <ImageView
                    url={image.url}
                    description={image.description}
                    isComment={false}
                  />
                </ImageOption>
              );
            }
          })}
        </ImageOptions>
        {!pattern.isLower && (
          <ImagePusher
            $data="right"
            data-testid="__arrow_view_right"
            ref={rightPush}
          >
            <SlArrowRight />
          </ImagePusher>
        )}
      </ImageViewerContainer>
    </>
  );
}

export function ImageView({
  url,
  description,
  domain,
  isComment,
}: ImageViewType) {
  if (url?.startsWith('blob:')) {
    return <img src={url} alt={description} />;
  }
  return (
    <img
      src={isComment ? domain + url : url}
      alt={description}
      data-testid={`__image_profile_view`}
    />
  );
}

// TODO: REACT ICONS HERE
