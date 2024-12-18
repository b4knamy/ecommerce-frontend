import { memo, useState } from 'react';
import * as S from './table.style';
import arrTdResolver from './helpers';
import { TableRowsType } from './table.type';
import { IoIosArrowUp } from 'react-icons/io';
import { useGlassesContext } from '../../context';

function TableRows({ title, value }: TableRowsType) {
  return (
    <div className="tb-container">
      <div className="tb-title">
        <span>{title}:</span>
      </div>
      <div className="tb-value">
        <span>{value}.</span>
      </div>
    </div>
  );
}

const Description = memo(() => {
  const { color, brand, shape, model, category, warranty, description } =
    useGlassesContext();
  return (
    <>
      <TableRows title="Descrição" value={description} />
      <TableRows title="Marca" value={arrTdResolver(brand)} />
      <TableRows title="Formato" value={arrTdResolver(shape)} />
      <TableRows title="Modelo" value={arrTdResolver(model)} />
      <TableRows title="Categoria" value={arrTdResolver(category)} />
      <TableRows title="Cor" value={arrTdResolver(color)} />
      <TableRows title="Garantia" value={warranty} />
    </>
  );
});

const Especification = memo(() => {
  const { material, height, width, rim, bridge, temple, nose_pads, gender } =
    useGlassesContext();
  return (
    <>
      <TableRows title="Material" value={material} />
      <TableRows title="Altura" value={height} />
      <TableRows title="Largura" value={width} />
      <TableRows title="Aro" value={rim} />
      <TableRows title="Ponte" value={bridge} />
      <TableRows title="Hastes" value={temple} />
      <TableRows title="Protetor" value={nose_pads} />
      <TableRows title="Genero" value={gender} />
    </>
  );
});
export default function TableShape({ title, isDescription }: TableShapeProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <S.TableTitleContainer
        $isOpen={show ? 'true' : 'false'}
        onClick={() => {
          setShow(!show);
        }}
      >
        <span>{title}:</span> <IoIosArrowUp />
      </S.TableTitleContainer>
      <S.TableContainer className={show ? 'open' : 'close'}>
        {isDescription ? <Description /> : <Especification />}
      </S.TableContainer>
    </>
  );
}
type TableShapeProps = {
  title: string;
  isDescription: boolean;
};
