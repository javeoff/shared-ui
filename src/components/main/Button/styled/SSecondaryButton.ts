import { colors } from '@shared/ui/common';
import styled from 'styled-components';

import { SButton } from '@shared/ui/components/main/Button/styled/SButton';
import { TButtonType } from '@shared/ui/components/main/Button/types/TButtonType';

export const SSecondaryButton = styled(SButton)`
  border: 1px solid ${({ buttonType }) => getBorderColorByType(buttonType)};
  background-color: ${({ buttonType }) => getBackgroundColorByType(buttonType)};
  color: ${({ buttonType }) => getColorByType(buttonType)};

  &:hover {
    background: ${({ buttonType }) =>
      getHoveredBackgroundColorByType(buttonType)};
  }

  &:active {
    background: ${({ buttonType }) =>
      getActivedBackgroundColorByType(buttonType)};
  }
`;

const getBorderColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_300;
    case 'error':
      return colors.accent.ACCENT_RED_300;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_300;
    case 'success':
      return colors.accent.ACCENT_GREEN_300;
  }
};

const getBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_800;
    case 'error':
      return colors.accent.ACCENT_RED_300;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_300;
    case 'success':
      return colors.accent.ACCENT_GREEN_300;
  }
};

const getHoveredBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_800;
    case 'error':
      return colors.accent.ACCENT_RED_400;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_400;
    case 'success':
      return colors.accent.ACCENT_GREEN_400;
  }
};

const getActivedBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_800;
    case 'error':
      return colors.accent.ACCENT_RED_500;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_500;
    case 'success':
      return colors.accent.ACCENT_GREEN_500;
  }
};

const getColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.LIGHT;
    case 'error':
      return colors.text.LIGHT;
    case 'warning':
      return colors.text.LIGHT;
    case 'success':
      return colors.text.LIGHT;
  }
};
