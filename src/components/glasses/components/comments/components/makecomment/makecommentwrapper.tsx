import { Dispatch, SetStateAction, useState } from 'react';
import MakeComment from './makecomment';
import { ErrorValidatorComment } from './warnings/validatorErrors/validatorError';
import { CommentPostType } from './makecomment.type';
import SucessfullyCommentCreatedWarning from './warnings/commentCreatedWarning/createdwarning';
import { ErrorPatternType } from '../../../../../../utils/customError';
import { CommentsArrayType } from '../../comments.type';

export type MKWrapperProps = {
  setOpenCommentForm: Dispatch<SetStateAction<boolean>>;
  openCommentForm: boolean;
  setCommentArray: Dispatch<SetStateAction<CommentsArrayType>>;
  slug: string;
};

export default function MakeCommentWrapper({
  setCommentArray,
  setOpenCommentForm,
  openCommentForm,
  slug,
}: MKWrapperProps) {
  const [error, setError] = useState<ErrorPatternType | null>(null);
  const [isCommentCreated, setIsCommentCreated] = useState<boolean>(false);

  const [comment, setComment] = useState<CommentPostType>({
    color: undefined,
    rating: null,
    title: '',
    text: '',
  });

  if (error) {
    return (
      <ErrorValidatorComment
        message={error.message}
        setterHandler={() => {
          setError(null);
        }}
      />
    );
  }

  if (isCommentCreated) {
    return (
      <SucessfullyCommentCreatedWarning
        handler={() => {
          setIsCommentCreated(false);
          setOpenCommentForm(false);
        }}
      />
    );
  }
  return (
    <MakeComment
      openCommentForm={openCommentForm}
      setError={setError}
      setIsCommentCreated={setIsCommentCreated}
      setCommentArray={setCommentArray}
      setOpenCommentForm={setOpenCommentForm}
      setComment={setComment}
      comment={comment}
      slug={slug}
    />
  );
}
