import { FC, useState } from 'react';

import { Container } from '@shared/ui/components/layout/Container/Container';
import { IInputProps, Input } from '@shared/ui/components/form/Input/Input';

export const InputExample: FC<IInputProps> = ({ ...props }) => {
  const [value, setValue] = useState('');

  return (
    <Container fullWidth={false} isFlex={true}>
      <Input {...props} value={value} onChange={setValue} />
    </Container>
  );
};
