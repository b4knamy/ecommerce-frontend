import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import {
  COLOR_VALUE_IS_REQUIRED_WARNING,
  RATING_VALUE_IS_REQUIRED_WARNING,
  TEXT_IS_REQUIRED_WARNING,
  TITLE_IS_REQUIRED_WARNING,
} from '../../../../../../settings/glass/warnings';
import { PostComment } from '../../../../../helpers/functions/api/api';
import {
  CommentFormRefsType,
  CommentPostType,
  CommentPostValidatedOptionType,
  CommentPostValidatedType,
  ContentTypeTyped,
  JSONCommentType,
} from './makecomment.type';
import {
  InitState,
  UserInfo,
} from '../../../../../../context/authContext/context/context.type';
import { AuthContextType } from '../../../../../../context/authContext/actions/action.type';
import { CommentsArrayType, CommentsType } from '../../comments.type';
import { FAILED_TO_CREATE_COMMENT_ERROR } from '../../../../../../settings/warnings/comments';
import CustomError, {
  ErrorPatternType,
} from '../../../../../../utils/customError';

export const formHandler = (
  data: CommentPostValidatedType,
  userId: number,
  glassesId: number,
  files: FileList | null = null,
): FormData | JSONCommentType | undefined => {
  if (files) {
    const form: FormData = new FormData();
    form.append('glasses', glassesId.toString());
    form.append('user', userId.toString());
    form.append('color', data.color);
    form.append('rating', data.rating.toString());
    form.append('title', data.title);
    form.append('text', data.text);
    for (let i = 0; i < files.length; i++) {
      form.append('images', files[i]);
    }
    return form;
  } else {
    const form: JSONCommentType = {
      glasses: glassesId,
      color: data.color,
      rating: data.rating,
      title: data.title,
      text: data.text,
      user: userId,
    };

    return form;
  }
};

export function formValidator(
  form: CommentFormRefsType,
  setError: Dispatch<SetStateAction<ErrorPatternType | null>>,
): false | CommentPostValidatedType {
  const { ratingRef, colorRef, titleRef, textRef } = form;

  const validatedComment: CommentPostValidatedOptionType = {};

  if (colorRef.current instanceof HTMLSelectElement) {
    const colorValue = colorRef.current.value;
    if (
      colorValue === undefined ||
      colorValue === 'Nenhum' ||
      typeof colorValue !== 'string'
    ) {
      setError({ status: 0, message: COLOR_VALUE_IS_REQUIRED_WARNING });
      return false;
    }
    validatedComment['color'] = colorValue;
  }

  if (ratingRef.current instanceof HTMLDivElement) {
    const ratingString = ratingRef.current.getAttribute('data-selected');
    const ratingValue = Number(ratingString);
    if (ratingString === null || (ratingValue <= 0 && ratingValue > 5)) {
      setError({ status: 0, message: RATING_VALUE_IS_REQUIRED_WARNING });
      return false;
    }
    validatedComment['rating'] = ratingValue as 1 | 2 | 3 | 4 | 5;
  }

  if (titleRef.current instanceof HTMLInputElement) {
    const titleValue = titleRef.current.value;
    if (titleValue === '' || typeof titleValue !== 'string') {
      setError({ status: 0, message: TITLE_IS_REQUIRED_WARNING });
      return false;
    }
    validatedComment['title'] = titleValue;
  }

  if (textRef.current instanceof HTMLTextAreaElement) {
    const textValue = textRef.current.value;
    if (textValue === '' || typeof textValue !== 'string') {
      setError({ status: 0, message: TEXT_IS_REQUIRED_WARNING });
      return false;
    }
    validatedComment['text'] = textValue;
  }
  if (
    validatedComment.color &&
    validatedComment.title &&
    validatedComment.text &&
    validatedComment.rating
  ) {
    const data: CommentPostValidatedType = {
      color: validatedComment.color,
      title: validatedComment.title,
      text: validatedComment.text,
      rating: validatedComment.rating,
    };
    return data;
  }
  setError({
    status: 0,
    message:
      'Ocorreu um erro desconhecido, por favor, tente novamente mais tarde.',
  });
  // TODO: create a message in settings to perform dinammically
  return false;
}

export function CommentFormResolver(
  data: CommentPostValidatedType,
  user: InitState,
  glassesId: number,
  fileRef: MutableRefObject<HTMLInputElement | null>,
) {
  let form;
  let contentType: ContentTypeTyped = 'json';

  if (user.info) {
    if (fileRef.current?.files?.length) {
      contentType = 'form';
      form = formHandler(data, user.info.id, glassesId, fileRef.current.files);
    } else {
      form = formHandler(data, user.info.id, glassesId);
    }
  }

  return { form: form, contentType: contentType };
}

export async function performPostComment(
  url: string,
  data: CommentPostValidatedType,
  auth: AuthContextType,
  glassesId: number,
  slug: string,
  fileRef: MutableRefObject<HTMLInputElement | null>,
) {
  const { form, contentType } = CommentFormResolver(
    data,
    auth.user,
    glassesId,
    fileRef,
  );
  const response = await PostComment(
    url,
    form,
    contentType,
    auth.user.token?.access || '',
    slug,
  );

  if (!response.ok) {
    throw new CustomError(response.status, FAILED_TO_CREATE_COMMENT_ERROR);
  }

  return response;
}

export function performAddCommentCreated(
  comment: CommentPostValidatedType,
  comment_ID: number,
  setCommentArray: Dispatch<SetStateAction<CommentsArrayType>>,
  user: UserInfo,
  files: HTMLInputElement | null,
) {
  const newComment = createCommentObj(comment, comment_ID, user, files);

  setCommentArray((prev) => {
    const updatedArray = [newComment].concat(prev.comments);

    return { ...prev, comments: updatedArray, max: prev.max + 1 };
  });
}

function createCommentObj(
  comment: CommentPostValidatedType,
  comment_ID: number,
  user: UserInfo,
  files: HTMLInputElement | null,
) {
  const colorName =
    document
      .querySelector(`[data-content="color-option-${comment.color}"]`)
      ?.getAttribute('data-name') || '';
  const newComment: CommentsType = {
    color: {
      id: 1,
      name: colorName,
    },
    images_comments: createImagesCommentObj(files),
    id: comment_ID,
    rating: Number(comment.rating),
    text: comment.text,
    title: comment.title,
    created_at: commentCreatedAt(),
    // @ts-ignore
    user: {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
  };
  return newComment;
}

function commentCreatedAt() {
  const now = new Date();

  // Extract hours and minutes
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  // Extract day, month, and year
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  // Format the date string
  const formattedDate = `ás ${hours}:${minutes}hrs, ${day}/${month}/${year}`;

  return formattedDate;
}
function createImagesCommentObj(files: HTMLInputElement | null) {
  if (files instanceof HTMLInputElement && files.files instanceof FileList) {
    const arrImages = Array.from(files.files);
    return arrImages.map((image, index) => {
      return {
        id: index + 1,
        image: URL.createObjectURL(image),
        description: 'unknow',
      };
    });
  }

  return null;
}

export function performSaveCurrentCommentDataIfFails(
  form: CommentFormRefsType,
  setComment: Dispatch<SetStateAction<CommentPostType>>,
) {
  const newCommentObj: CommentPostType = {
    color: form.colorRef.current?.value ?? undefined,
    rating:
      Number(form.ratingRef.current?.getAttribute('data-selected')) || null,
    title: form.titleRef.current?.value ?? '',
    text: form.textRef.current?.value ?? '',
  };
  setComment((prev) => {
    return { ...prev, color: newCommentObj.color };
  });
}
