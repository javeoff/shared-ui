import { colors } from '@shared/ui/common';
import styled from 'styled-components';

import { SButton } from '@shared/ui/components/main/Button/styled/SButton';
import { TButtonType } from '@shared/ui/components/main/Button/types/TButtonType';

export const STransparentButton = styled(SButton)`
  border: 1px solid transparent;
  background: transparent;
  color: ${({ buttonType }) => getColorByType(buttonType)};

  &:hover {
    background: ${({ buttonType }) =>
      getHoveredBackgroundColorByType(buttonType)};
  }

  &:active {
    background: ${({ buttonType }) =>
      getActiveBackgroundColorByType(buttonType)};
  }
`;

const getHoveredBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_100;
    case 'error':
      return colors.accent.ACCENT_RED_100;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_100;
    case 'success':
      return colors.accent.ACCENT_GREEN_100;
  }
};

const getActiveBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_200;
    case 'error':
      return colors.accent.ACCENT_RED_200;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_200;
    case 'success':
      return colors.accent.ACCENT_GREEN_200;
  }
};

const getColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_600;
    case 'error':
      return colors.accent.ACCENT_RED_400;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_400;
    case 'success':
      return colors.accent.ACCENT_GREEN_400;
  }
};
