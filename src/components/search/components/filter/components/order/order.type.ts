export type ByOrderProps = {
  testName: string;
  name: string;
  order: string;
  isSelected: boolean;
  id: number;
  setterOrder: (value: string) => void;
};

export type ByOrderContainerProps = {
  relatedAction: (payload: string) => void;
  params: string | null;
};
