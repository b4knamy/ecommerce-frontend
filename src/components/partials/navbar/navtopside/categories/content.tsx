import { CategoryContainer, Container, Content } from './categories.style';
import CategoryDataViews from './category/data';
import { IoIosArrowUp } from 'react-icons/io';
import NavSite from './site';
import { useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const variants = {
  hidden: { opacity: 0, x: '50px', display: 'none' },
  enter: { opacity: 1, x: 0, display: 'flex' },
};

export default function Category({ text, type }: props) {
  const { pathname } = useLocation();
  const controls = useAnimation();
  return (
    <Container
      onMouseEnter={() => controls.start('enter')}
      onMouseLeave={() => controls.start('hidden')}
      style={
        pathname === '/pesquisa' && type === 'category'
          ? { display: 'none' }
          : {}
      }
    >
      <CategoryContainer className="title">
        <span>
          {text} <IoIosArrowUp />
        </span>
      </CategoryContainer>
      <Content
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, type: 'easeOut' }}
        $type={type}
      >
        {type !== 'category' ? <NavSite /> : <CategoryDataViews />}
      </Content>
    </Container>
  );
}

type props = {
  text: string;
  type: 'category' | 'pages';
};
