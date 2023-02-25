import { colors } from '@shared/ui/common';
import styled from 'styled-components';

import { SButton } from '@shared/ui/components/main/Button/styled/SButton';
import { TButtonType } from '@shared/ui/components/main/Button/types/TButtonType';

export const SPrimaryButton = styled(SButton)`
  display: block;
  border: 1px solid ${({ buttonType }) => getBorderColorByType(buttonType)};
  background: ${colors.base.LIGHT};
  color: ${({ buttonType }) => getColorByType(buttonType)};
  transition: 0.1s ease-in;

  &:hover {
    background: ${({ buttonType }) =>
      getHoveredBackgroundColorByType(buttonType)};
    color: ${({ buttonType }) => getHoveredColorByType(buttonType)};
  }

  &:active {
    background: ${({ buttonType }) =>
      getActiveBackgroundColorByType(buttonType)};
  }
`;

export const getBorderColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_300;
    case 'error':
      return colors.accent.ACCENT_RED_300;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_300;
  }
};

const getHoveredBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_100;
    case 'error':
      return colors.accent.ACCENT_RED_300;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_300;
  }
};

const getActiveBackgroundColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_200;
    case 'error':
      return colors.accent.ACCENT_RED_400;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_500;
  }
};

const getHoveredColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_600;
    case 'error':
      return colors.base.LIGHT;
    case 'warning':
      return colors.base.LIGHT;
  }
};

const getColorByType = (type: TButtonType): string => {
  switch (type) {
    case 'secondary':
      return colors.base.NEUTRAL_600;
    case 'error':
      return colors.accent.ACCENT_RED_300;
    case 'warning':
      return colors.accent.ACCENT_YELLOW_300;
  }
};
