import { DecoratorFunction } from '@storybook/addons';
import { ReactElement } from 'react';

import { ThemeProvider } from '@anagram/ui/components/app/ThemeProvider/ThemeProvider';

export const themeDecorator: DecoratorFunction<ReactElement> = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
