import { ReactElement } from 'react';

import { Container } from '@shared/ui/components/layout/Container/Container';
import { MenuItem } from '@shared/ui/components/app/Menu/components/MenuItem/MenuItem';
import { Menu } from '@shared/ui/components/app/Menu/Menu';

export const MenuExample = (): ReactElement => {
  return (
    <Container fullWidth={false} isFlex={true}>
      <Menu>
        <MenuItem href='#'>Menu item</MenuItem>
        <MenuItem href='#'>ddd item</MenuItem>
      </Menu>
    </Container>
  );
};
