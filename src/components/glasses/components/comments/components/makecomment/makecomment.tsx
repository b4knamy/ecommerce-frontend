import CommentForm from './commentform/commentform';
import { Container } from './makecomment.style';
import ShortProductReview from './shortreview/shortreview';
import {
  formValidator,
  performAddCommentCreated,
  performPostComment,
} from './helpers';
import useMakeComment from './hook';
import { MakeCommentProps } from './makecomment.type';
import CustomError from '../../../../../../utils/customError';
import useAuthContext from '../../../../../../context/authContext/context/context';
import useSettings from '../../../../../../context/settingsContext/context';
import { useGlassesContext } from '../../../context';
const variants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
    display: 'none',
    transition: { duration: 1, type: 'tween' },
  },
  open: {
    opacity: 1,
    maxHeight: 2200,
    display: 'flex',
    transition: { duration: 0.5, type: 'tween' },
  },
};

export default function MakeComment({
  setError,
  setIsCommentCreated,
  setCommentArray,
  setOpenCommentForm,
  openCommentForm,
  setComment,
  comment,
  slug,
}: MakeCommentProps) {
  const { form, updateComment, goTo } = useMakeComment();
  const { api } = useSettings();
  const { id } = useGlassesContext();
  const auth = useAuthContext();
  const handlerSubmit = async () => {
    const validatedComment = formValidator(form, setError);
    if (!validatedComment) {
      updateComment(setComment);
      return;
    }

    try {
      const response = await performPostComment(
        api.comments,
        validatedComment,
        auth,
        id,
        slug,
        form.fileRef,
      );

      if (response?.status === 201) {
        const { comment_ID }: { comment_ID: number } = await response.json();

        if (auth.user.info) {
          performAddCommentCreated(
            validatedComment,
            comment_ID,
            setCommentArray,
            auth.user.info,
            form.fileRef.current,
          );
          setIsCommentCreated(true);
          // TODO: criar textos padronizados em respostas a possiveis erros.
        }
      }
    } catch (err) {
      if (err instanceof CustomError) {
        err.applyWarning(setError);
      } else {
        setError({ message: 'Algo deu errado, tente novamente mais tarde.' });
      }
      updateComment(setComment);
    }
  };

  return (
    <Container
      ref={goTo}
      variants={variants}
      initial="open"
      exit="hidden"
      animate={openCommentForm ? 'open' : 'hidden'}
    >
      <ShortProductReview
        ratingRef={form.ratingRef}
        colorRef={form.colorRef}
        defaultRatingValue={comment.rating}
        defaultColorValue={comment.color}
      />
      <CommentForm
        titleRef={form.titleRef}
        defaultTitleValue={comment.title}
        textRef={form.textRef}
        defaultTextValue={comment.text}
        fileRef={form.fileRef}
      />
      <div className="mk-comment-options">
        <button type="button" onClick={() => handlerSubmit()}>
          Enviar
        </button>
        <button type="button" onClick={() => setOpenCommentForm(false)}>
          Cancelar
        </button>
      </div>
    </Container>
  );
}
