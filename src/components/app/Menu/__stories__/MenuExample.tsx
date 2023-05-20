import { ReactElement } from 'react';

import { Container } from '@shared/ui/components/layout/Container/Container';
import { Menu, MenuItem } from '@shared/ui/components/app/Menu/Menu';

export const MenuExample = (): ReactElement => {
  return (
    <Container fullWidth={false} isFlex={true}>
      <Menu>
        <MenuItem onClick={() => {}}>Menu item</MenuItem>
        <MenuItem onClick={() => {}}>ddd item</MenuItem>
      </Menu>
    </Container>
  );
};
