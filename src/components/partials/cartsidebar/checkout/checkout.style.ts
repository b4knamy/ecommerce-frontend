import styled from 'styled-components';
import { flexBoxDirection } from '../../../../settings/styles/utils';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  max-height: calc(100% - ((100% - 50px) - 20%));
  ${({ theme }) => {
    return {
      color: theme.colors.primaryDark,
      fontSize: theme.text.size.xlarge,
    };
  }}

  ${flexBoxDirection('center', 'center', 'column')}
  gap: 20px;

  div {
    width: 100%;
    ${flexBoxDirection('space-between', 'center', 'row')}
    padding: 0px 15%;
  }
  div:nth-child(1) {
    width: 80%;
    height: 2px;
    background-color: white;
  }
  button {
    width: 100%;
    height: 50px;
    font-size: ${({ theme }) => theme.text.size.large};
    &:hover {
      ${({ theme }) => {
        return {
          backgroundColor: theme.colors.primaryGreen,
        };
      }}
    }
    transition: background-color 300ms linear;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: ${({ theme }) => theme.text.size.medium};
  }
`;
