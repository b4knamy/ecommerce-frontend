import * as S from './section.style';
import { ContentProps } from './section.type';

export function BlockContent({ imgUrl, imgAlt, title, text }: ContentProps) {
  return (
    <S.BlockChildren>
      <img src={imgUrl} alt={imgAlt} />
      <div>
        <h2>{title}</h2>
        <span>{text}</span>
      </div>
    </S.BlockChildren>
  );
}

export default function SectionContent() {
  return (
    <S.Container>
      <img
        content="background"
        src="https://images.unsplash.com/photo-1528669833931-275d4bd6e9bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background image"
      />
      <S.Content>
        <S.Title>
          <div content="title">
            <h1>Lorem ipsum dolor</h1>
          </div>
          <div content="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nihil odio doloribus veritatis expedita asperiores! Cumque
              asperiores, veniam officia, illo quidem minus quia expedita nihil
              excepturi qui voluptas dicta placeat?
            </p>
          </div>
        </S.Title>
        <S.BlockContainer>
          <BlockContent
            imgUrl="https://medriocheck-up.com.br/wp-content/uploads/2023/11/Oculos-de-sol-opcao-4-Freepik-1024x768.jpg"
            imgAlt="Masculino"
            title="Doloribus veritatis"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi, libero, fuga nostrum ab deleniti officiis quis iste, esse aliquid facilis mollitia possimus! Tempore ratione atque commodi voluptates, aliquid ut!"
          />
          <BlockContent
            imgUrl="https://img.freepik.com/fotos-premium/um-grupo-de-pessoas-esta-sorrindo-e-usando-oculos-e-gravata-preta_670382-21962.jpg"
            imgAlt="Masculino"
            title="Minus quia expedita"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi, libero, fuga nostrum ab deleniti officiis quis iste, esse aliquid facilis mollitia possimus! Tempore ratione atque commodi voluptates, aliquid ut!"
          />
        </S.BlockContainer>
      </S.Content>
    </S.Container>
  );
}
