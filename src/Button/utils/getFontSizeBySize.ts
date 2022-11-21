import { sizes } from '@anagram/frontend-common';

import { TButtonSize } from '@anagram/ui/Button/types/TButtonSize';

export const getFontSizeBySize = (size: TButtonSize): string => {
  switch (size) {
    case 'sm':
      return sizes.font.SMALL;
    case 'md':
    case 'lg':
      return sizes.font.LARGE;
  }
};
