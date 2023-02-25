import { sizes } from '@shared/ui/common';
import { TButtonSize } from '@shared/ui/components/main/Button/types/TButtonSize';

export const getHeightBySize = (size: TButtonSize): string => {
  switch (size) {
    case 'sm':
    case 'md':
      return sizes.height.MEDIUM;
    case 'lg':
      return sizes.height.LARGE;
  }
};
