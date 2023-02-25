import { FC, useState } from 'react';

import { Container } from '@shared/ui/components/layout/Container/Container';
import { IInputProps } from '@shared/ui/components/form/Input/Input';
import { Search } from '@shared/ui/components/form/Search/Search';

export const SearchExample: FC<Omit<IInputProps, 'onChange' | 'value'>> = ({
  ...props
}) => {
  const [value, setValue] = useState<string>();

  return (
    <Container fullWidth={false} isFlex={true}>
      <Search isClearable={true} value={value} onChange={setValue} {...props} />
    </Container>
  );
};
