import styled from 'styled-components';
import { flexBoxOnlyDirection } from '../../../../../../settings/styles/utils';

export const ContainerWrapper = styled.div`
  ${flexBoxOnlyDirection('column')}

  text-align: center;
`;

export const Group = styled.div`
  ${flexBoxOnlyDirection('row')}

  gap: 30px;
  margin-top: 20px;
  justify-content: center;
`;

export const Content = styled.div`
  width: 70px;
  height: 40px;

  input {
    height: 30px;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    outline: none;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      ${({ theme }) => {
        return {
          backgroundColor: theme.colors.secondaryDark,
          color: theme.colors.primaryLight,
        };
      }};

      transition: all 300ms ease;
    }
  }
`;
