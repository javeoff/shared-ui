import { sizes } from '@shared/ui/common';

import { TButtonSize } from '@shared/ui/components/main/Button/types/TButtonSize';

export const getFontSizeBySize = (size: TButtonSize): string => {
  switch (size) {
    case 'sm':
      return sizes.font.SMALL;
    case 'md':
    case 'lg':
      return sizes.font.LARGE;
  }
};
