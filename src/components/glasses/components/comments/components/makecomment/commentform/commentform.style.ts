import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../../settings/styles/utils';

export const Container = styled.div`
  ${flexBoxDirection('center', 'center', 'column')}

  gap: 25px;
  width: 80%;
  padding: 20px;

  input[type='text'],
  textarea {
    border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  ${flexBoxDirection('start', 'start', 'column')}
  width: 80%;
  height: max-content;

  gap: 10px;
  input {
    width: 100%;
    height: 30px;
    padding: 5px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const Comment = styled.div`
  ${flexBoxDirection('start', 'start', 'column')}
  width: 80%;
  height: max-content;
  gap: 10px;

  textarea {
    text-align: start;
    padding: 5px;
    width: 100%;
    height: 200px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const Images = styled.div`
  ${flexBoxDirection('center', 'center', 'column')};
  gap: 25px;

  width: 80%;

  img {
    width: 200px;
    height: 200px;
  }

  .input-file {
    width: 200px;
    text-align: center;

    input[type='file'] {
      display: none;
    }

    label {
      width: 200px;
      height: 100px;
      cursor: pointer;
      &:hover {
        svg {
          color: ${({ theme }) => theme.colors.secondaryDark};
        }
      }
      transition: all 300ms linear;

      svg {
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
  .uploaded-files {
    ${flexBoxOnlyDirection('column')}
    gap: 30px;
    text-align: center;
    width: 80%;

    div {
      width: 100%;
      ${flexBoxDirection('center', 'center', 'row')}
      gap: 20px;
      flex-wrap: wrap;
    }
  }
`;
