import { Dispatch, SetStateAction } from 'react';
import { GlassesImagesType } from '../../index.type';

export type GlassesImageViewType = {
  images: GlassesImagesType[];
};

export type ImageViewType = {
  url: string;
  description: string;
  domain?: string;
  isComment: boolean;
};

export type ImageViewerType = {
  primaryImage: GlassesImagesType;
  images: GlassesImagesType[];
  setPrimaryImage: Dispatch<SetStateAction<GlassesImagesType>>;
};
