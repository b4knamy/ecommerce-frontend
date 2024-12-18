import styled from 'styled-components';
import { flexBox } from '../../../../settings/styles/utils';
import { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primaryDark};

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 400px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    height: 250px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    height: 250px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 100px;
    margin-top: 50px;
    font-size: ${theme.text.size.xxlarge};
    color: ${theme.colors.primaryRed};

    p {
      color: ${theme.colors.primaryLight};
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: ${theme.text.size.large};
      margin-left: 20px;
      margin-top: 100px;
    }

    @media (min-width: 520px) and (max-width: 767px) {
      font-size: ${theme.text.size.medium};
      width: 300px;
      margin-left: 20px;
      margin-top: 30px;
    }

    @media (min-width: 0px) and (max-width: 519px) {
      font-size: ${theme.text.size.small};
      width: 200px;
      margin-left: 20px;
      margin-top: 20px;
    }
  `}
`;

export const Image = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  height: 1000px;
  position: absolute;
  ${flexBox('center', 'center')};
  right: 0;
  margin-right: 400px;
  transform: rotate(20deg) translateY(-200px);

  img {
    transform: rotate(-10deg) translateY(-50px) scale(1.2);
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    margin-right: 200px;
    width: 300px;

    img {
      transform: rotate(-10deg) translateY(-50px) scale(1);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 150px;
    width: 250px;

    img {
      transform: rotate(-10deg) translateY(-100px) scale(0.7);
    }
  }
  @media (min-width: 520px) and (max-width: 767px) {
    margin-right: 150px;
    width: 150px;
    img {
      transform: rotate(-10deg) translateY(-180px) translateX(25px) scale(0.5);
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    margin-right: 200px;
    width: 150px;

    transform: rotate(30deg) translateY(-180px);
    img {
      transform: rotate(-20deg) translateY(-180px) translateX(25px) scale(0.5);
    }
  }
`;
