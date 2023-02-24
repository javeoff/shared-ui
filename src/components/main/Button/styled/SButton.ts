import { ButtonHTMLAttributes, HTMLProps } from 'react';
import styled from 'styled-components';

import { TButtonSize } from '../types/TButtonSize';
import { TButtonType } from '../types/TButtonType';
import { getFontSizeBySize } from '../utils/getFontSizeBySize';
import { getHeightBySize } from '../utils/getHeightBySize';
import { getPaddingBySize } from '../utils/getPaddingBySize';

export const SButton = styled.button<{
  size: TButtonSize;
  buttonType: TButtonType;
	isFullWidth: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>>`
  user-select: none;
  padding: ${({ size }) => getPaddingBySize(size)};
  height: ${({ size }) => getHeightBySize(size)};
  border-radius: 5px;
  font-size: ${({ size }) => getFontSizeBySize(size)};
  cursor: pointer;
	width: ${({ isFullWidth }) => isFullWidth ? '100%' : 'auto'};
`;
