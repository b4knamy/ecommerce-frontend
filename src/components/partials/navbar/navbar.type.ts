export type NavbarInformationsAPIDATA = {
  data: NavbarItemsType[];
  filter_name: string;
  name: string;
};

export type NavbarItemsType = {
  id: number;
  name: string;
  slug: string;
};
