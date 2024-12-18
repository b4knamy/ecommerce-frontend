import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 50px;
  position: relative;
  gap: 20px;

  .total-assessment {
    position: absolute;
    left: 40%;
    font-size: ${({ theme }) => theme.text.size.large};
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    .total-assessment {
      position: relative;
      left: 0%;
    }
  }
`;

export const Filter = styled.div`
  width: max-content;
  height: 30px;

  select {
    width: 100%;
    font-size: 20px;
    color: black;
    /* -webkit-appearance: none; */
    padding: 5px;
    border-radius: 3px;

    option:hover {
      color: blue;
      background-color: black;
      cursor: pointer;
    }
  }

  @media (min-width: 0px) and (max-width: 520px) {
    width: 80%;
    select {
      font-size: 12px;
    }
  }
`;
