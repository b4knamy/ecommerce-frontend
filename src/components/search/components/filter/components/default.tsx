import { useState } from 'react';
import { ChildrenComponentNode } from '../../../../helpers/types/types';
import { Container, Group, Title } from './components.style';
import { useAnimation } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

export const filterVariants = {
  hidden: { height: 0, opacity: 0, overflow: 'hidden' },
  open: { height: 'auto', opacity: 1 },
};

export default function FilterShape({
  name,
  testName,
  isAmount,
  children,
}: props) {
  const [open, setOpen] = useState(true);
  const controls = useAnimation();
  return (
    <Container>
      <Title
        onClick={() => {
          controls.start(open ? 'open' : 'hidden');
          setOpen(!open);
        }}
        $open={open ? 'open' : 'hidden'}
      >
        <span>{name}</span>
        <IoIosArrowUp />
      </Title>
      <Group
        data-testid={`${testName}-children-container`}
        variants={filterVariants}
        animate={controls}
        initial="hidden"
        transition={{
          duration: 0.5,
          type: 'linear',
        }}
        $direction={isAmount ? 'row' : 'column'}
      >
        {children}
      </Group>
    </Container>
  );
}

interface props extends ChildrenComponentNode {
  name: string;
  testName?: string;
  isAmount?: boolean;
}
