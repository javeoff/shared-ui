import { sizes } from '@anagram/frontend-common';

import { TButtonSize } from '@anagram/ui/Button/types/TButtonSize';

export const getHeightBySize = (size: TButtonSize): string => {
  switch (size) {
    case 'sm':
    case 'md':
      return sizes.height.MEDIUM;
    case 'lg':
      return sizes.height.LARGE;
  }
};
