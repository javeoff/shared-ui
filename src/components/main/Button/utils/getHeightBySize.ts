import { sizes } from '@anagram/ui/common';
import { TButtonSize } from '@anagram/ui/components/main/Button/types/TButtonSize';

export const getHeightBySize = (size: TButtonSize): string => {
  switch (size) {
    case 'sm':
    case 'md':
      return sizes.height.MEDIUM;
    case 'lg':
      return sizes.height.LARGE;
  }
};
