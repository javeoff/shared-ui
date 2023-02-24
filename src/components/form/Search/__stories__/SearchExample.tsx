import { FC, useState } from 'react';

import { Container } from '@anagram/ui/components/layout/Container/Container';
import { IInputProps } from '@anagram/ui/components/form/Input/Input';
import { Search } from '@anagram/ui/components/form/Search/Search';

export const SearchExample: FC<Omit<IInputProps, 'onChange' | 'value'>> = ({
  ...props
}) => {
  const [value, setValue] = useState<string>();

  return (
    <Container fullWidth={false} row={true}>
      <Search isClearable={true} value={value} onChange={setValue} {...props} />
    </Container>
  );
};
