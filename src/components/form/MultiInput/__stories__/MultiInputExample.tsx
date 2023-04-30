import { FC, useState } from 'react';

import { Container } from '@shared/ui/components/layout/Container/Container';
import { IMultiInputProps, MultiInput } from '../MultiInput';

export const MultiInputExample: FC<IMultiInputProps> = ({ ...props }) => {
  const [items, setItems] = useState([]);

  return (
    <Container fullWidth={false} isFlex={true}>
      <MultiInput items={items} />
    </Container>
  );
};
