import { RelatedInfoType } from '../../../index.type';

export type TableRowsType = {
  title: string;
  value: string;
};

export type EspecificationType = {
  temple: string;
  rim: string;
  gender: string;
  width: string;
  height: string;
  bridge: string;
  material: string;
  nose_pads: string;
};

export type DescriptionType = {
  color: RelatedInfoType[];
  brand: RelatedInfoType[];
  shape: RelatedInfoType[];
  category: RelatedInfoType[];
  model: RelatedInfoType[];
  description: string;
  warranty: string;
};
