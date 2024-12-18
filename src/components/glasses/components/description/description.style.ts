import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 50px;

  @media (min-width: 0px) and (max-width: 767px) {
    margin-top: 80px;
    width: 100%;
    padding: 50px 10px;
  }
`;
