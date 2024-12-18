import { Container, Image, Text } from './mid.style';
import raybanImg from './../../../../assets/rayban_3-removebg-preview.png';

export default function ParticularDescription() {
  return (
    <Container>
      <Text>
        <h2>Ray-Ban: Ícone de Estilo</h2>
        <p>
          Explore a icônica coleção Ray-Ban. Elegância, qualidade e proteção em
          cada modelo. Seja único, seja Ray-Ban.
        </p>
      </Text>
      <Image>
        <img src={raybanImg} alt="oculos ray-ban" />
      </Image>
    </Container>
  );
}
