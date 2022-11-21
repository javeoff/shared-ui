import { FC, useState } from 'react';

import { Container } from '@anagram/ui/Container/Container';
import { IInputProps, Input } from '@anagram/ui/Input/Input';

export const InputExample: FC<IInputProps> = ({ ...props }) => {
  const [value, setValue] = useState('');

  return (
    <Container fullWidth={false} row={true}>
      <Input {...props} value={value} onChange={setValue} />
    </Container>
  );
};
