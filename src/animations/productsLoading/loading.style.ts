import styled, { keyframes } from 'styled-components';
import { flexBox } from '../../settings/styles/utils';

const LoadingAnimation = (initScale: number, finishScale: number) => keyframes`
    0% {
      transform: rotate(0deg) scale(${initScale});
    }
    50% {
      transform: rotate(360deg) scale(${finishScale});
    }
    100% {
      transform: rotate(720deg) scale(${initScale});
    }
`;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  ${flexBox('center', 'center')}

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: relative;

  svg {
    animation-name: ${({ $initScale, $finishScale }) =>
      LoadingAnimation($initScale, $finishScale)};
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    color: ${({ $color }) => $color};
  }
  span {
    position: absolute;
    font-size: 18px;
  }

  &.context-loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    ${flexBox('center', 'center')};
  }
`;

type LoadingContainerProps = {
  $width: string;
  $height: string;
  $initScale: number;
  $finishScale: number;
  $color: string;
};
