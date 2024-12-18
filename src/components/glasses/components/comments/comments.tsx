import ListComments from './components/comments/listcomment/listcomments';
import { Dispatch, memo, SetStateAction, useEffect, useState } from 'react';
import { CommentsArrayType } from './comments.type';
import MakeCommentWrapper from './components/makecomment/makecommentwrapper';
import CommentRating from './components/rating/rating';
import { Container } from './comments.style';
import useAuthContext from '../../../../context/authContext/context/context';
import LoginRequiredWarning from './components/makecomment/warnings/loginRequired/confirm';
import { GlassesRatingsType } from '../../index.type';

type CommentsProps = { slug: string; ratings: GlassesRatingsType[] };
export interface MakeCommentContainerProps extends CommentsProps {
  setCommentArray: Dispatch<SetStateAction<CommentsArrayType>>;
  max: number;
}

export default function Comments({ slug, ratings }: CommentsProps) {
  const [commentArray, setCommentArray] = useState<CommentsArrayType>({
    comments: [],
    limit: 1,
    orderBy: 'higher',
    max: 0,
  });

  useEffect(() => {
    setCommentArray({
      comments: [],
      limit: 1,
      orderBy: 'higher',
      max: 0,
    });
  }, [slug]);
  return (
    <Container>
      <MakeCommentContainer
        setCommentArray={setCommentArray}
        slug={slug}
        max={commentArray.max}
        ratings={ratings}
      />
      <ListComments
        commentArray={commentArray}
        setCommentArray={setCommentArray}
        slug={slug}
      />
    </Container>
  );
}

const MakeCommentContainer = memo(
  ({ setCommentArray, slug, max, ratings }: MakeCommentContainerProps) => {
    const [openCommentForm, setOpenCommentForm] = useState(false);
    const { user } = useAuthContext();

    return (
      <>
        <CommentRating
          setOpenCommentForm={setOpenCommentForm}
          max={max}
          ratings={ratings}
        />
        {user.isAuthenticated ? (
          <MakeCommentWrapper
            openCommentForm={openCommentForm}
            slug={slug}
            setCommentArray={setCommentArray}
            setOpenCommentForm={setOpenCommentForm}
          />
        ) : (
          openCommentForm && (
            <LoginRequiredWarning setOpenCommentForm={setOpenCommentForm} />
          )
        )}
      </>
    );
  },
);
