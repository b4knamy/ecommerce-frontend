import {
  getCSRFToken,
  getUserData,
  jwtGetToken,
} from '../../../helpers/functions/api/api';
import { LoginDataType } from '../../../helpers/functions/api/api.type';

export async function performUserLogin(data: LoginDataType) {
  const csrf = await getCSRFToken(data.urls.csrf);

  if (!csrf.ok) return;

  const csrf_token = await csrf.json();
  const response = await jwtGetToken(data, csrf_token.csrf_token);

  if (!response.ok) return;

  const accessToken = await response.json();
  const user = await getUserData(accessToken.access, data.urls.user);

  if (!user.ok) return;

  return {
    user: await user.json(),
    token: accessToken,
  };
}
