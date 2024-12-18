import { css, keyframes } from 'styled-components';

const FadeInAnimation = (justFade?: boolean) => keyframes`
  0% {
    opacity: 0;
    ${!justFade && 'margin-left: 50px'}

  }
  100% {
    opacity: 1;
  }
`;

export const FadeInCSS = (justFade?: boolean) => css`
  animation-name: ${FadeInAnimation(justFade)};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`;
