import { ListCommentApiType } from '../comments.type';

export default async function fetchComments(
  url: string,
  slug: string,
  page: number,
  orderBy: string,
): Promise<ListCommentApiType | null> {
  const new_url = url + `${slug}/page/${page}?order=${orderBy}`;
  const response = await fetch(new_url);

  if (response.ok) {
    return await response.json();
  }

  return null;
}
