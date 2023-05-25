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

    --color-system-error: #e00;
    --color-system-error-light: #ff1a1a;
    --color-system-error-dark: #c50000;
    --color-system-warning: #f5a623;
    --color-system-warning-light: #f7b955;
    --color-system-warning-dark: #ab570a;
    --color-accent-yellow-500: #ea9c15;
    --color-accent-yellow-400: #eea42d;
    --color-accent-yellow-300: #f5a623;
    --color-accent-yellow-200: #fce4c3;
    --color-accent-yellow-100: #feedd8;
    --color-accent-orange-400: #F7653B;
    --color-accent-orange-300: #FF6F2C;
    --color-accent-orange-200: #FF9A4A;
    --color-accent-orange-100: #FEE2D5;
    --color-accent-red-500: #df1b1b;
    --color-accent-red-400: #ef3030;
    --color-accent-red-300: #e5484d;
    --color-accent-red-200: #f2ada9;
    --color-accent-red-100: #ffd1d1;
    --color-accent-pink-400: #E929BA;
    --color-accent-pink-300: #FF08C2;
    --color-accent-pink-200: #F99DE2;
    --color-accent-pink-100: #FFDAF6;
    --color-accent-purple-400: #7C39ED;
    --color-accent-purple-300: #8B46FF;
    --color-accent-purple-200: #CDB0FF;
    --color-accent-purple-100: #EDE3FE;
    --color-accent-blue-400: #1283DA;
    --color-accent-blue-300: #1668E2;
    --color-accent-blue-200: #0052CC;
    --color-accent-blue-100: #CFDFFF;
    --color-accent-teal-400: #02AAA4;
    --color-accent-teal-300: #20D9D2;
    --color-accent-teal-200: #72DDC3;
    --color-accent-teal-100: #C2F5E9;
    --color-accent-green-500: #F1F9EA;
    --color-accent-green-400: #11AF22;
    --color-accent-green-300: #45a557;
    --color-accent-green-200: #93E088;
    --color-accent-green-100: #D1F7C4;
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

    --color-system-error: #e00;
    --color-system-error-light: #ff1a1a;
    --color-system-error-dark: #c50000;
    --color-system-warning: #f5a623;
    --color-system-warning-light: #f7b955;
    --color-system-warning-dark: #ab570a;
    --color-accent-yellow-500: #ea9c15;
    --color-accent-yellow-400: #eea42d;
    --color-accent-yellow-300: #f5a623;
    --color-accent-yellow-200: #fce4c3;
    --color-accent-yellow-100: #feedd8;
    --color-accent-orange-400: #573300;
    --color-accent-orange-300: #4d2a00;
    --color-accent-orange-200: #331b00;
    --color-accent-orange-100: #fef3dc;
    --color-accent-red-500: #832126;
    --color-accent-red-400: #671e21;
    --color-accent-red-300: #da5860;
    --color-accent-red-200: #3c1618;
    --color-accent-red-100: #2c1516;
    --color-accent-pink-400: #551b33;
    --color-accent-pink-300: #4f1c31;
    --color-accent-pink-200: #3a1726;
    --color-accent-pink-100: #feecf4;
    --color-accent-purple-400: #4f2768;
    --color-accent-purple-300: #422154;
    --color-accent-purple-200: #2e1938;
    --color-accent-purple-100: #f8edfc;
    --color-accent-blue-400: #1283DA;
    --color-accent-blue-300: #0f2f57;
    --color-accent-blue-200: #10233d;
    --color-accent-blue-100: #ebf6ff;
    --color-accent-teal-400: #053d35;
    --color-accent-teal-300: #083a33;
    --color-accent-teal-200: #062822;
    --color-accent-teal-100: #e0faf4;
    --color-accent-green-500: #126426;
    --color-accent-green-400: #0c451b;
    --color-accent-green-300: #6be489;
    --color-accent-green-200: #0f2e18;
    --color-accent-green-100: #122415;
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
