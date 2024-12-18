import { CategoriesContainer } from './categories.style';
import Category from './content';

export default function AllCategories() {
  return (
    <CategoriesContainer>
      <Category text="Filtros" type="category" />
      <Category text="Site" type="pages" />
    </CategoriesContainer>
  );
}
