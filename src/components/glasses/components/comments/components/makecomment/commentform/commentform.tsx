import { Container, Title, Comment } from './commentform.style';
import { CommentFormProps } from './commentform.type';
import { ImagesForm } from './images/image';

export default function CommentForm({
  titleRef,
  defaultTitleValue,
  textRef,
  defaultTextValue,
  fileRef,
}: CommentFormProps) {
  return (
    <Container>
      <Title>
        <input
          ref={titleRef}
          name="title"
          type="text"
          id="comment-title"
          defaultValue={defaultTitleValue}
          placeholder="Digite aqui o titulo do comentário"
        />
      </Title>
      <Comment>
        <textarea
          ref={textRef}
          name="comment"
          id="comment-text"
          defaultValue={defaultTextValue}
          placeholder="Digite aqui o seu comentário"
        />
      </Comment>
      <ImagesForm fileRef={fileRef} />
    </Container>
  );
}
