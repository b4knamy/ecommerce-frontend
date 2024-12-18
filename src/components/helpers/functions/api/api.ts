import * as typed from './api.type';
import { getApiRequestErrors } from './helpers';
import { ContentTypeTyped } from './../../../glasses/components/comments/components/makecomment/makecomment.type';

export async function getCSRFToken(url: string) {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Algo deu errado, por favor, tente novamente mais tarde.');
  }

  return response;
}

export async function jwtGetToken(
  data: typed.LoginDataType,
  csrf_token: string,
) {
  const token = await fetch(data.urls.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrf_token,
    },
    body: JSON.stringify(data.userInfo),
    credentials: 'include',
  });

  return token;
}

export async function getUserData(token: string, url: string) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  });

  return response;
}

export async function refreshToken(url: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return response;
}

export async function logOutUser(url: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (!response.ok) {
    const errorMessage = getApiRequestErrors(response.status);
    throw new Error(errorMessage);
  }
  return false;
}

export async function PostComment(
  url: string,
  form: typed.PostCommentDataType,
  contentType: ContentTypeTyped,
  token: string,
  slug: string,
) {
  /* eslint-disable-next-line */
  let headers: { [key: string]: string } = {
    Authorization: `Bearer ${token}`,
  };

  if (contentType === 'json') {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url + slug, {
    method: 'POST',
    headers: headers,
    body: form instanceof FormData ? form : JSON.stringify(form),
    credentials: 'include',
  });
  return response;
}
