import {
  getUserData,
  refreshToken,
} from '../../components/helpers/functions/api/api';
import { APISettigs } from '../settingsContext/context';
import { LoginPayload } from './actions/action.type';
import { UserInfo, UserToken } from './context/context.type';

export async function checkUserIsNotAuthOrGetUserData(
  api: APISettigs,
): Promise<null | LoginPayload> {
  const checkRefreshToken = await refreshToken(api.refresh);

  if (checkRefreshToken.status !== 200) {
    return null;
  }

  const token: UserToken = await checkRefreshToken.json();

  const data = await getUserData(token.access, api.get_user_data);

  if (!data.ok) {
    return null;
  }

  const userInfo: UserInfo = await data.json();

  const payload: LoginPayload = {
    user: userInfo,
    token: token,
  };

  return payload;
}
