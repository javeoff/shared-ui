import { FC } from 'react';

import { Container } from '@anagram/ui/components/layout/Container/Container';
import { useSelect } from '@anagram/ui/components/form/Select/hooks/useSelect';
import { ISelectProps, Select } from '@anagram/ui/components/form/Select/Select';

export const SelectExample: FC<ISelectProps> = ({ ...props }) => {
  const { values, onChange, activeValueIdx } = useSelect([
    'Select 1',
    'Select 2',
    'Select 3',
  ]);

  return (
    <Container fullWidth={false} row={true}>
      <Select
        {...props}
        values={values}
        activeValueIdx={activeValueIdx}
        onChange={onChange}
      />
    </Container>
  );
};
