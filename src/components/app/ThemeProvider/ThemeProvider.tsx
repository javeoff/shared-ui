import { colors, isDarkMode } from '@shared/ui/common';
import { FC, ReactNode, useEffect } from 'react';
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

    --color-base-light: #ffffff;
    --color-base-neutral-100: #f9f9f8;
    --color-base-neutral-200: #f3f3f3;
    --color-base-neutral-300: #eaeaea;
    --color-base-neutral-400: #989999;
    --color-base-neutral-500: #888;
    --color-base-neutral-600: #666;
    --color-base-neutral-700: #333;
    --color-base-neutral-800: #111;
    --color-base-error-light: #ffd3d1;
    --color-base-error-dark: #c50000;
    --color-base-error: #e00;
    --color-base-warning-light: #feedd8;
    --color-base-warning-dark: #ab570a;
    --color-base-warning: #f5a623;
    --color-base-violet-lighter: #d8ccf1;
    --color-base-violet-light: #8a63d2;
    --color-base-violet: #7928ca;
    --color-base-violet-dark: #4c2889;
    --color-text-light: #ffffff;
    --color-text-lighter-dark: #777;
    --color-text-light-dark: #666;
    --color-text-dark: #444;
    --color-text-primary: #000;
    --color-text-link: #1283DA;
  }

  body.dark {
    --color-base-light: #000000;
    --color-base-neutral-100: #0a0a0a;
    --color-base-neutral-200: #121212;
    --color-base-neutral-300: #2b2b2b;
    --color-base-neutral-400: #525252;
    --color-base-neutral-500: #737373;
    --color-base-neutral-600: #a3a3a3;
    --color-base-neutral-700: #d4d4d4;
    --color-base-neutral-800: #e5e5e5;
    --color-base-error-light: #ffd3d1;
    --color-base-error-dark: #c50000;
    --color-base-error: #e00;
    --color-base-warning-light: #feedd8;
    --color-base-warning-dark: #ab570a;
    --color-base-warning: #f5a623;
    --color-base-violet-lighter: #d8ccf1;
    --color-base-violet-light: #8a63d2;
    --color-base-violet: #7928ca;
    --color-base-violet-dark: #4c2889;
    --color-text-light: #ffffff;
    --color-text-lighter-dark: #444;
    --color-text-light-dark: #999;
    --color-text-dark: #fff;
    --color-text-primary: #000;
    --color-text-link: #1283DA;
  }
`;

export const ThemeProvider: FC<{ children?: ReactNode | undefined }> = ({
  children,
}) => {
  return (
  <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
);
}
