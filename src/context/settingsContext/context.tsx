import { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenComponentNode } from '../../components/helpers/types/types';
import Loading from '../../animations/productsLoading/loading';

export type APISettigs = {
  products: string;
  filters: string;
  promotions: string;
  product_profile: string;
  dynamic_search: string;
  navbar_filters: string;
  comments: string;
  create_user: string;
  get_user_data: string;
  refresh: string;
  token: string;
  verify: string;
  logout: string;
  csrf: string;
  user_profile: string;
  reset_code: string;
  change: string;
  payment_products: string;
  checkout: string;
};

export type SiteSettings = {
  site_name: string;
  site_domain: string;
  max_image_size: number;
  max_file_per_comment: number;
  max_product_pagination: number;
  max_product_query_pagination: number;
  default_image_url: string;
  filter_1: string;
  filter_2: string;
  filter_3: string;
  filter_4: string;
  filter_5: string;
  filter_6: string;
  param_1: string;
  param_2: string;
  param_3: string;
  param_4: string;
  param_5: string;
  param_6: string;
};

type SettingsProps = {
  api: APISettigs;
  settings: SiteSettings;
};

const SettingsContext = createContext<SettingsProps | null>(null);

export const SettingsContextProvider = ({
  children,
}: ChildrenComponentNode) => {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<SettingsProps | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const response = await fetch(
        'https://rogeriodeveloper.com/api/site/settings',
      );
      // const response = await fetch('http://localhost:8000/api/site/settings');

      if (response.ok) {
        const response_settings: SettingsProps = await response.json();
        setSettings(response_settings);
      }
    };

    fetchSettings().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading class="context-loading" />;
  }

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export default function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be inside SettingsContextProvider.');
  }

  return context;
}
