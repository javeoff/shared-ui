import { FC } from 'react';
import styled, { css } from 'styled-components';

import { getHeightBySize } from '@anagram/ui/Icon/components/IconWrapper/utils/getHeightBySize';
import { TIconSize } from '@anagram/ui/Icon/types/TIconSize';

export interface IIconProps {
  size?: TIconSize;
}

export const IconWrapper =
  (Component: FC): FC<IIconProps> =>
  ({ size = 'md', ...props }) => {
    return (
      <SWrapper size={size} {...props}>
        <Component />
      </SWrapper>
    );
  };

const SWrapper = styled.div<Required<IIconProps>>(
  ({ size }) => css`
    width: ${getHeightBySize(size)};
    height: ${getHeightBySize(size)};
  `,
);
