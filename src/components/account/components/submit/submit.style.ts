import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  width: 100px;
  height: 30px;
  ${({ theme }) => ({
    backgroundColor: theme.colors.secondaryDark,
    color: theme.colors.primaryLight,
  })}

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryGray};
  }
`;
