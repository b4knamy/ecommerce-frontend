export function getObjectNameRelated(
  prev: UserProfileFormType,
  field: FieldType,
  value: string,
) {
  if (field === 'first_name') {
    return { ...prev, first_name: value };
  } else if (field === 'last_name') {
    return { ...prev, last_name: value };
  } else if (field === 'email') {
    return { ...prev, email: value };
  } else if (field === 'zipcode') {
    if (!Number.isInteger(Number(value))) return;
    return { ...prev, zipcode: value };
  } else if (field === 'address') {
    return { ...prev, address: value };
  } else if (field === 'complement') {
    return { ...prev, complement: value };
  }
}

export function getObjectMessageRelated(result: any) {
  const messageObject: { [key: string]: string | string[] } = {};

  if (result.email) {
    messageObject.email = result.email;
  }
  if (result.first_name) {
    messageObject.first_name = result.first_name;
  }
  if (result.last_name) {
    messageObject.last_name = result.last_name;
  }
  if (result.zipcode) {
    messageObject.zipcode = result.zipcode;
  }
  if (result.complement) {
    messageObject.complement = result.complement;
  }
  if (result.address) {
    messageObject.address = result.address;
  }

  return messageObject;
}

export type UserProfileFormType = {
  first_name: string;
  last_name: string;
  email: string;
  zipcode: string;
  address: string;
  complement: string;
  slug?: string;
};

export type FieldType =
  | 'first_name'
  | 'last_name'
  | 'email'
  | 'zipcode'
  | 'address'
  | 'complement';

export type ProfileMessageType = {
  email?: string[];
  first_name?: string[];
  last_name?: string[];
  zipcode?: string[];
  complement?: string[];
  address?: string[];
  success?: string;
} | null;
