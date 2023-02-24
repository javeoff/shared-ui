import { colors } from '@anagram/ui/common';
import { FC, ReactNode } from 'react';
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

const theme = {
  colors: colors,
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 1rem;
  }
`;

export const ThemeProvider: FC<{ children?: ReactNode | undefined }> = ({
  children,
}) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);
