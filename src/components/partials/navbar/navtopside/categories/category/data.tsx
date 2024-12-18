import { useEffect, useState } from 'react';
import {
  CategoryDataContainer,
  CategoryViewData,
  CategoryViewer,
  CategoryViewGroup,
  CategoryViewTitle,
} from './data.style';
import { NavbarInformationsAPIDATA } from '../../../navbar.type';
import { Link } from 'react-router-dom';
import Loading from '../../../../../../animations/productsLoading/loading';
import useSettings from '../../../../../../context/settingsContext/context';

export default function CategoryDataViews() {
  const { api } = useSettings();
  const [loading, setLoading] = useState(true);
  const [navData, setNavData] = useState<NavbarInformationsAPIDATA[]>([]);

  useEffect(() => {
    fetch(api.navbar_filters).then(async (response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }

      const result = await response.json();
      setNavData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <CategoryDataContainer>
      <CategoryViewer>
        {navData.map((data, index) => {
          return (
            <CategoryView
              key={index}
              filterName={data.filter_name}
              name={data.name}
              data={data.data}
            />
          );
        })}
      </CategoryViewer>
    </CategoryDataContainer>
  );
}

function CategoryView({ name, filterName, data }: CategoryViewProps) {
  const [hide, setHide] = useState(true);
  return (
    <CategoryViewGroup
      onMouseOver={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <CategoryViewTitle className="category-title">
        <span>{name}</span>
      </CategoryViewTitle>
      <ViewData filterName={filterName} data={data} hide={hide} />
    </CategoryViewGroup>
  );
}

type CategoryViewProps = {
  name: string;
  filterName: string;
  data: {
    id: number;
    name: string;
    slug: string;
  }[];
};

function ViewData({ filterName, data, hide }: ViewDataProps) {
  return (
    <CategoryViewData
      className="category-data"
      $display={hide ? 'none' : 'flex'}
    >
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/pesquisa?${filterName}=${item.slug}`}>
              <span>{item.name}</span>
            </Link>
          </div>
        );
      })}
    </CategoryViewData>
  );
}

type ViewDataProps = {
  filterName: string;
  data: {
    id: number;
    name: string;
    slug: string;
  }[];
  hide: boolean;
};
