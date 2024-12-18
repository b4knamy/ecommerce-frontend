import styled from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../settings/styles/utils';

export const ImageViewerContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'row')};
  width: 100%;
  height: 100px;
  position: relative;
`;

export const ImagePusher = styled.div<{ $data: string }>`
  ${flexBox('center', 'center')};
  width: 25px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);

  ${({ $data }) => ($data === 'left' ? 'left: 0;' : 'right: 0;')}

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const ImageOptions = styled.div<{ $width: 1 | 0 }>`
  ${flexBoxOnlyDirection('row')};
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
  width: ${({ $width }) => ($width === 1 ? '500px' : '600px')};
`;

export const ImageOption = styled.div<{ $isprimary: 1 | 0 }>`
  opacity: ${({ $isprimary }) => ($isprimary === 1 ? '0.4' : '1')};
  position: relative;
  min-width: 100px;
  min-height: 100px;
  background-color: red;
  border: 1px solid black;
  cursor: pointer;

  transition: all linear 300ms;

  h1 {
    position: absolute;
    top: 50%;
    bottom: 50%;
    font-size: 40px;
  }

  img {
    width: 100px;
    min-height: 100%;
    max-height: 100%;
  }
`;
