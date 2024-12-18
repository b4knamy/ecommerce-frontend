import useCartContext from '../../../../context/cartContext/context/context';
import useSettings from '../../../../context/settingsContext/context';
import { PriceTable } from '../../../home/components/pricing/pricetable/pricetable';
import PricingData from '../../../home/components/pricing/pricing.type';
import { Container } from './recommended.style';

const GlassesRecommended = ({
  relateds_glasses,
}: {
  relateds_glasses: PricingData[];
}) => {
  const { settings } = useSettings();
  const { actions } = useCartContext();
  return (
    <Container data-testid="__related_glasses">
      <div className="related-text-container">
        <span>Você também pode gostar</span>
      </div>
      <div className="related-container">
        {relateds_glasses.map((glasses) => {
          return (
            <PriceTable
              key={glasses.id}
              {...glasses}
              addItem={actions.addItem}
              defaultImageUrl={settings.default_image_url}
              domain={settings.site_domain}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default GlassesRecommended;
