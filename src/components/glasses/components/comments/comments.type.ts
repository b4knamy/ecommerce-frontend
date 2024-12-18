import {
  InitState,
  UserInfo,
} from '../../../../context/authContext/context/context.type';
import { GlassesImagesType, RelatedInfoType } from '../../index.type';

export type GlassesCommentsType = {
  glasses: GlassesTypeComment;
  // comments: CommentsType[];
};

export type GlassesTypeComment = {
  image: GlassesImagesType;
  colors: RelatedInfoType[];
  id: number;
  name: string;
  slug: string;
};
export type CommentsArrayType = {
  comments: CommentsType[];
  limit: number;
  orderBy: string;
  max: number;
};
export type CommentsType = {
  color: {
    id: number;
    name: string;
  };
  created_at: string;
  id: number;
  images_comments: CommentImageType[] | null;
  rating: number;
  text: string;
  title: string;
  user: UserInfo;
};

type CommentImageType = {
  id: number;
  image: string;
  description: string;
};

export interface ListCommentType extends CommentsType {
  currentUser: InitState;
  slug: string;
  deleteComment: (id: number) => void;
  domain: string;
}
