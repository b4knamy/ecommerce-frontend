import { CommentsType } from '../../comments.type';

export type ListCommentApiType = {
  new_comments: CommentsType[];
  limit: number;
  max: number;
};
