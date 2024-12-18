import * as Glasses from './description.style';
import TableShape from './table/table';

const GlassesDescription = () => {
  return (
    <Glasses.Container>
      <TableShape title="Descrição" isDescription={true} />
      <TableShape title="Especificação" isDescription={false} />
    </Glasses.Container>
  );
};

export default GlassesDescription;
