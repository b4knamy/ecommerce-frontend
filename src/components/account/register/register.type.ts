export type WarningRegisterType = {
  email: string[];
  password: string[];
  repPassword: string[];
  fName: string[];
};

export type UserRegisterType = {
  fName: string;
  lName: string;
  email: string;
  password: string;
  repPassword: string;
};
export type CreatedUserTypeInfo = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};
export type DataCreatedUserType = CreatedUserTypeInfo | WarningRegisterType;
