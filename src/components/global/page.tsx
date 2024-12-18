import { GlobalPageContainer } from '../../settings/styles/default';
import { ChildrenComponentNode } from '../helpers/types/types';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: '100%' },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-100%' },
};

const Page = ({ children }: ChildrenComponentNode) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <GlobalPageContainer>{children}</GlobalPageContainer>
      </motion.div>
    </>
  );
};

export default Page;
