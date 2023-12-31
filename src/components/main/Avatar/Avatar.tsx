import { FC } from 'react';
import styled, { css } from 'styled-components';

import { TAvatarSize } from '@shared/ui/components/main/Avatar/types/TAvatarSize';

export interface IAvatarProps {
  size?: TAvatarSize;
  src: string;
}

/**
 * Avatar component
 * @param size Avatar size enum
 * @param src Avatar path url
 * @constructor
 */
export const Avatar: FC<IAvatarProps> = ({ size = 'md', src }: IAvatarProps) => {
  return (
    <SWrapper size={size}>
      <SAvatar src={src} />
    </SWrapper>
  );
};

const getAvatarWidthBySize = (size: TAvatarSize): number => {
  switch (size) {
    case 'sm':
      return 30;
    case 'md':
      return 45;
    case 'lg':
      return 150;
  }
};

const SWrapper = styled.div<{ size: TAvatarSize }>(
  ({ size }) => css`
    width: ${getAvatarWidthBySize(size)}px;
    height: ${getAvatarWidthBySize(size)}px;
  `,
);

export const SAvatar = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
