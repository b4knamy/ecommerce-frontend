import { RefObject } from 'react';

export type AccountInputType = {
  label: string;
  elementId: string;
  type: string;
  placeholder: string;
  warnings?: string[];
  initValue: string;
  reference: RefObject<HTMLInputElement>;
};

export type AccountInputErrorType = {
  warning: string;
};

export type RegisterInputType = {
  placeholder: string;
  elementId: string;
  initValue: string;
  reference: RefObject<HTMLInputElement>;
  type: string;
};

export type isPwdType = {
  $ispwd: string;
};
