export type InitState = {
  isAuthenticated: boolean;
  info: UserInfo | null;
  token: UserToken | null;
};

export type UserInfo = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  slug: string;
};

export type UserToken = {
  access: string;
};
