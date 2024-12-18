import {
  Container,
  Content,
  Title,
  Comment,
  User,
  Image,
  Details,
} from '../listcomment/listcomment.style';
import { STARS_RATING as stars } from '../../../../../../../settings/glass/configs';
import { CommentsArrayType, ListCommentType } from '../../../comments.type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useAuthContext from '../../../../../../../context/authContext/context/context';
import DeleteCommentOption from '../../delete';
import fetchComments from './helpers';
import FilterComment from '../../filters/filter';
import { ImageView } from '../../../../images/components/viewer';
import useSettings from '../../../../../../../context/settingsContext/context';
import { FaStar, FaUser, FaUserCheck } from 'react-icons/fa';
import Loading from '../../../../../../../animations/productsLoading/loading';
import { NoDataExists } from '../../../../../../search/components/navigation/components/products/products';
import { CiStar } from 'react-icons/ci';

export type ListCommentsProps = {
  commentArray: CommentsArrayType;
  setCommentArray: Dispatch<SetStateAction<CommentsArrayType>>;
  slug: string;
};

export default function ListComments({
  commentArray,
  setCommentArray,
  slug,
}: ListCommentsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { settings } = useSettings();
  const { user } = useAuthContext();
  const { api } = useSettings();
  const { comments, orderBy, limit, max } = commentArray;
  const nextPage = Math.ceil(comments.length / 5 + 1 || 1);
  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, [orderBy, slug]);
  const getComments = async () => {
    try {
      setIsLoading(true);
      const fetchedComments = await fetchComments(
        api.comments,
        slug,
        nextPage,
        orderBy,
      );
      if (fetchedComments) {
        const { new_comments, limit, max } = fetchedComments;

        setCommentArray((prev) => {
          const updatedComments = [...prev.comments, ...new_comments];
          return { ...prev, comments: updatedComments, limit: limit, max: max };
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteComment = (id: number) => {
    setCommentArray((prev) => {
      const updatedArray = prev.comments.filter((comment) => comment.id !== id);
      return { ...prev, comments: updatedArray, max: prev.max - 1 };
    });
  };
  return (
    <>
      {comments.length !== 0 ? (
        <>
          <FilterComment
            setCommentArray={setCommentArray}
            orderBy={orderBy}
            max={max}
          />
          <Container data-testid="__comments_data">
            {comments.map((comment) => {
              return (
                <ListComment
                  key={comment.id}
                  {...comment}
                  currentUser={user}
                  slug={slug}
                  deleteComment={deleteComment}
                  domain={settings.site_domain}
                />
              );
            })}

            {isLoading ? (
              <Loading width="200px" height="400px" init={10} finish={14} /> // TODO: create an animation for loading...
            ) : (
              nextPage <= limit && (
                <button onClick={getComments} type="button">
                  Carregar mais avaliações
                </button>
              )
            )}
          </Container>
        </>
      ) : isLoading ? (
        <Loading height="400px" init={10} finish={14} />
      ) : (
        <NoDataExists text="Infelizmente ainda não há avaliações" />
      )}
    </>
  );
}
// TODO: make a no comments message.
function ListComment({
  user,
  title,
  text,
  images_comments,
  created_at,
  rating,
  color,
  id,
  currentUser,
  slug,
  deleteComment,
  domain,
}: ListCommentType) {
  const fullUserName: string = `${user.first_name} ${user.last_name}`;

  return (
    <Content>
      <Details>
        <div className="detail-date">
          <span>{created_at}</span>
        </div>

        <div className="detail-rate">
          {stars.map((star) => {
            return star > rating ? (
              <CiStar key={star} />
            ) : (
              <FaStar key={star} />
            );
          })}
        </div>
        <div className="detail-color">
          <span>{color.name}</span>
        </div>
      </Details>
      <User>
        <div content="user">
          {currentUser.info?.id === user.id ? <FaUserCheck /> : <FaUser />}
        </div>
        <p>{fullUserName}</p>
        {currentUser.info?.id === user.id ? (
          <DeleteCommentOption
            commentId={id}
            slug={slug}
            token={currentUser?.token?.access || ''}
            deleteComment={deleteComment}
          />
        ) : (
          ''
        )}
      </User>
      <Title>
        <h3>{title}</h3>
      </Title>
      <Comment>
        <p>{text}</p>
      </Comment>
      {images_comments ? (
        <Image>
          {images_comments.map((image, index) => {
            return (
              <ImageView
                key={image.id}
                domain={domain}
                isComment={true}
                url={image.image}
                description={`Imagem review ${index + 1} do usuário ${fullUserName}`}
              />
            );
          })}
        </Image>
      ) : (
        <></>
      )}
    </Content>
  );
}
