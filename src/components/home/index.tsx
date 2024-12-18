// import Header from '../partials/header/header';
import useSettings from '../../context/settingsContext/context';
import Header from '../partials/header/header';
import SectionContent from './components/intro/section';
import ParticularDescription from './components/mid/section';
import Pricing from './components/pricing/pricing';
import * as S from './index.style';

export default function Home() {
  const { api } = useSettings();
  return (
    <>
      <Header />
      <S.Container>
        <SectionContent />
        <ParticularDescription />
        <Pricing url={api.promotions} />
      </S.Container>
    </>
  );
}
