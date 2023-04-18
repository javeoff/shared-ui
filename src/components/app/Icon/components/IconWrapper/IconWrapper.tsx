import { FC } from 'react';
import styled, { css } from 'styled-components';

import { getHeightBySize } from '@shared/ui/components/app/Icon/components/IconWrapper/utils/getHeightBySize';
import { TIconSize } from '@shared/ui/components/app/Icon/types/TIconSize';

export interface IIconProps {
  size?: TIconSize;
  iconColor?: string;
}

export const IconWrapper =
  (Component: FC): FC<IIconProps> =>
    ({ size = 'md', iconColor, ...props }) => {
      return (
        <SWrapper
          size={size}
          iconColor={iconColor}
          {...props}
        >
          <Component />
        </SWrapper>
      );
    };

const SWrapper = styled.div<Required<IIconProps>>(
  ({ size, iconColor }) => css`
    width: ${getHeightBySize(size)};
    height: ${getHeightBySize(size)};
    & > * {
      ${iconColor && `fill: ${iconColor}!important;`}
    }
  `,
);
