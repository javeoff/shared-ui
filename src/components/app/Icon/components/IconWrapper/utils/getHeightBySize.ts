import { sizes } from '@anagram/ui/common';

import { TIconSize } from '@anagram/ui/components/app/Icon/types/TIconSize';

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
