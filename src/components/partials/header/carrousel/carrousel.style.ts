import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../settings/styles/utils';

export const Container = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  ${flexBoxOnlyDirection('row')}
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 650px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    height: 550px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    height: 350px;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  height: 25px;
  position: absolute;
  z-index: 4;
  bottom: 0;
  margin-bottom: 50px;
  ${flexBoxDirection('center', 'center', 'row')};
  gap: 20px;

  button {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: width 300ms linear;

    &.active {
      width: 50px;
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    button {
      width: 20px;
      height: 20px;
    }
    margin-bottom: 25px;
  }
`;

export const CarrouselContainer = styled.div`
  min-width: 100%;
  height: 100%;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CarrouselText = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;

  margin-bottom: 150px;
  margin-left: 100px;
  ${({ theme }) => ({
    fontSize: theme.text.size.title,
    color: theme.colors.primaryDark,
    textShadow: '2px 2px 2px ' + theme.colors.primaryLight,
  })}

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${({ theme }) => theme.text.size.xlarge};
    margin-left: 50px;
    margin-bottom: 100px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.text.size.large};
    margin-left: 25px;
    margin-bottom: 100px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    font-size: ${({ theme }) => theme.text.size.medium};
    margin-left: 25px;
    margin-bottom: 80px;
  }
`;
