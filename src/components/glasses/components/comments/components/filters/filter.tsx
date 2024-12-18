import { Dispatch, memo, SetStateAction } from 'react';
import { Container, Filter } from './filter.style';
import { CommentsArrayType } from '../../comments.type';

type FilterCommentType = {
  orderBy: string;
  setCommentArray: Dispatch<SetStateAction<CommentsArrayType>>;
  max: number;
};

const FilterComment = ({
  setCommentArray,
  orderBy,
  max,
}: FilterCommentType) => {
  return (
    <Container>
      <span className="total-assessment">Total de {max} avaliações.</span>
      <Filter>
        <select
          name="filters"
          id="filter-comments"
          onChange={(e) => {
            if (
              e.target instanceof HTMLSelectElement &&
              e.target.value !== null
            ) {
              setCommentArray((prev) => {
                return { ...prev, orderBy: e.target.value, comments: [] };
              });
            }
          }}
          defaultValue={orderBy}
        >
          <option value="higher">Comentários com maiores avaliações</option>
          <option value="lower">Comentários com menores avaliações</option>
          <option value="newer">Comentários mais recentes</option>
          <option value="older">Comentários mais antigos</option>
          <option value="image">Comentários que possuem fotos</option>
        </select>
      </Filter>
    </Container>
  );
};

// TODO: make the comment filters work.

export default memo(FilterComment);
