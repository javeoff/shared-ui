import { ReactElement } from 'react';

import { Container } from '@anagram/ui/Container/Container';
import { MenuItem } from '@anagram/ui/Menu/components/MenuItem/MenuItem';
import { Menu } from '@anagram/ui/Menu/Menu';

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
