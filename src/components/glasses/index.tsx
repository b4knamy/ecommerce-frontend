import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './index.style';
import Loading from '../../animations/productsLoading/loading';
import { GlassesProfileDataAPI } from './index.type';
import GlassesRecommended from './components/recommended/recommended';
import AllGlassesImformations from './components/details';
import Comments from './components/comments/comments';
import GlassesProfileContextProvider from './components/context';
import { NoDataExists } from '../search/components/navigation/components/products/products';
import useSettings from '../../context/settingsContext/context';

export default function Glasses() {
  const params = useParams<string>();
  const { api } = useSettings();
  const [glassesData, setGlassesData] = useState<GlassesProfileDataAPI>({
    glasses: null,
    relateds_glasses: [],
    ratings: [],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(api.product_profile + params.slug).then(async (response) => {
        if (!response.ok) {
          setLoading(false);
          throw new Error('Failed to fetch glasses data.');
        }

        const { glasses, relateds_glasses, ratings }: GlassesProfileDataAPI =
          await response.json();
        setGlassesData({ glasses, relateds_glasses, ratings });
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return <Loading />;
  }

  const { glasses, relateds_glasses, ratings } = glassesData;

  if (!glasses) {
    return (
      <div style={{ width: '100vw', height: 'calc(100vh - 350px)' }}>
        <NoDataExists text="Não existe esse produto" />
      </div>
    );
  }

  return (
    <GlassesProfileContextProvider value={glasses}>
      <Container data-testid="glasses-container">
        <AllGlassesImformations />
        <Comments slug={glasses.slug} ratings={ratings} />
        <GlassesRecommended relateds_glasses={relateds_glasses} />
      </Container>
    </GlassesProfileContextProvider>
  );
}

// TODO: DEFAULT IMAGE
