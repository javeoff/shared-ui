import { FC, useState } from 'react';

import { Container } from '@anagram/ui/Container/Container';
import { IInputProps } from '@anagram/ui/Input/Input';
import { Search } from '@anagram/ui/Search/Search';

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
