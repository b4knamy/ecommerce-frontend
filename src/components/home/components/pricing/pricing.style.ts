import styled, { css } from 'styled-components';
import { flexBox, flexBoxDirection } from '../../../../settings/styles/utils';

export const ContainerWrapper = styled.section`
  ${flexBoxDirection('center', 'center', 'column')}
  width: 100%;
  height: auto;

  transition: height 300ms linear;
  gap: 50px;
  border-bottom: 1px solid white;
`;
export const Title = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}

  width: 100%;
  height: 150px;
  text-align: center;
  font-size: ${({ theme }) => theme.text.size.xlarge};

  @media (min-width: 0px) and (max-width: 768px) {
    font-size: ${({ theme }) => theme.text.size.medium};
  }
`;

export const Content = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  padding: 20px 50px;

  width: 100%;
  height: 100%;
  gap: 50px;
  flex-wrap: wrap;
  position: relative;
  cursor: grab;
  scroll-behavior: smooth;
  @media (min-width: 0px) and (max-width: 768px) {
    gap: 20px;
    padding: 10px;
  }
`;

export const GetMoreResults = styled.div`
  ${({ theme }) => css`
    width: 200px;
    height: 150px;
    ${flexBox('center', 'center')}

    button {
      width: 200px;
      height: 40px;
      background-color: ${theme.colors.secondaryDark};
      color: ${theme.colors.primaryLight};
      border-radius: 10px;
      &:hover {
        color: ${theme.colors.primaryGray};
      }
    }
  `}
`;
