import { sizes } from '@anagram/frontend-common';

import { TIconSize } from '@anagram/ui/Icon/types/TIconSize';

export const getHeightBySize = (size: TIconSize): string => {
  switch (size) {
    case 'sm':
      return sizes.height.SMALL;
    case 'md':
      return sizes.height.MEDIUM;
    case 'lg':
      return sizes.height.LARGE;
  }
};
