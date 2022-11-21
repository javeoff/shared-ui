import { FC } from 'react';
import styled, { css } from 'styled-components';

import { TAvatarSize } from '@anagram/ui/Avatar/types/TAvatarSize';

interface IProps {
  size?: TAvatarSize;
  src: string;
}

export const Avatar: FC<IProps> = ({ size = 'md', src }) => {
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
