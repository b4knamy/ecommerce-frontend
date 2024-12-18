import { getCSRFToken } from '../../../helpers/functions/api/api';
import { createUserDataType } from '../../../helpers/functions/api/api.type';

export default async function createUser({
  urls,
  userInfo,
}: createUserDataType) {
  const csrf_token = await getCSRFToken(urls.csrf);

  if (!csrf_token) {
    return false;
  }
  const csrftoken = await csrf_token.json();
  const response = await fetch(urls.create, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-CSRFToken': csrftoken.csrf_token,
    },
    body: JSON.stringify({
      first_name: userInfo.fName,
      last_name: userInfo.lName,
      email: userInfo.email,
      password: userInfo.password,
    }),
    credentials: 'include',
  });

  return response;
}
