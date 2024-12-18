import styled from 'styled-components';

export const Container = styled.div`
  @include flexBox(center, center);

  padding-bottom: 50px;

  input {
    width: 100%;
    height: 40px;

    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 30px;
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.secondaryDark,
        color: theme.colors.primaryLight,
      };
    }}
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
    transition: all 300ms linear;
  }
`;
