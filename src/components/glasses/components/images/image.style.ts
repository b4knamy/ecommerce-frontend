import styled from 'styled-components';
import { flexBoxDirection } from '../../../../settings/styles/utils';

export const ImagesContainer = styled.div`
  ${flexBoxDirection('start', 'center', 'column')};

  width: 600px;
  height: 700px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: 500px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    width: 520px;
    height: 620px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 350px;
    height: 450px;
  }
`;
export const CurrentImage = styled.div<{
  $isActiveWatcher?: boolean;
  $xOffset?: number;
  $yOffset?: number;
}>`
  width: 600px;
  height: 600px;
  overflow: hidden;
  cursor: zoom-in;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.2 ease-out;
  }

  &:hover img {
    transform: ${({ $isActiveWatcher, $xOffset, $yOffset }) =>
      $isActiveWatcher
        ? `translate(${$xOffset}px, ${$yOffset}px) scale(1.5)`
        : 'none;'};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 520px) and (max-width: 767px) {
    width: 520px;
    height: 520px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 320px;
    height: 320px;
  }
`;
