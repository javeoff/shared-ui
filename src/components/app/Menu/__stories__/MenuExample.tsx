import { ReactElement } from 'react';

import { Container } from '@anagram/ui/components/layout/Container/Container';
import { MenuItem } from '@anagram/ui/components/app/Menu/components/MenuItem/MenuItem';
import { Menu } from '@anagram/ui/components/app/Menu/Menu';

export const MenuExample = (): ReactElement => {
  return (
    <Container fullWidth={false} row={true}>
      <Menu>
        <MenuItem href='#'>Menu item</MenuItem>
        <MenuItem href='#'>ddd item</MenuItem>
      </Menu>
    </Container>
  );
};
