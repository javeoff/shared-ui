import { colors, sizes, ZIndex } from '@anagram/frontend-common';
import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { Dropdown } from '../Dropdown/Dropdown';
import { Icon } from '@anagram/ui/Icon/Icon';
import { Label } from '@anagram/ui/Label/Label';
import { SelectBody } from '@anagram/ui/Select/components/SelectBody/SelectBody';
import { TSelectSize } from '@anagram/ui/Select/types/TSelectSize';
import { TSelectVariant } from '@anagram/ui/Select/types/TSelectVariant';

export interface ISelectProps {
  variant?: TSelectVariant;
  size?: TSelectSize;
  label?: string | undefined;
  placeholder?: string;
  values: Array<string | ReactElement>;
  activeValueIdx: number | undefined;
  onChange(valueIdx?: number): void;
  isAutoClose?: boolean;
}

export const Select: FC<ISelectProps> = ({
  isAutoClose = true,
  variant = 'primary',
  size = 'md',
  label,
  values,
  activeValueIdx,
  onChange,
  placeholder,
}) => {
  const activeValue =
    activeValueIdx !== undefined ? values[activeValueIdx] : undefined;

  return (
    <Label value={label}>
      <Dropdown
        isAutoClose={true}
        content={({ isActive, toggle }) => (
          <SWrapper
            onClick={toggle}
            isActive={isActive}
            size={size}
            variant={variant}
          >
            {!activeValue && <SPlaceholder>{placeholder}</SPlaceholder>}
            {!!activeValue && <div>{activeValue}</div>}
            <SAngleIcon isActive={isActive}>
              <Icon.AngleDown size='sm' />
            </SAngleIcon>
          </SWrapper>
        )}
      >
        {({ isActive, onClose }) => (
          <SSelectBody>
            <SelectBody
              values={values}
              activeValueIdx={activeValueIdx}
              onChange={(idx) => {
                onChange(idx);

                if (isAutoClose) {
                  onClose();
                }
              }}
              isActive={isActive}
            />
          </SSelectBody>
        )}
      </Dropdown>
    </Label>
  );
};

const getHeightBySize = (size: TSelectSize): string => {
  switch (size) {
    case 'sm':
      return sizes.padding.SMALL;
    case 'md':
      return sizes.padding.MEDIUM;
  }
};

const getFontSizeBySize = (size: TSelectSize): string => {
  switch (size) {
    case 'sm':
      return sizes.font.SMALL;
    case 'md':
      return sizes.font.LARGE;
  }
};

const SWrapper = styled.div<{
  isActive: boolean;
  size: TSelectSize;
  variant: TSelectVariant;
}>(
  ({ variant, isActive, size }) => css`
    user-select: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 ${sizes.padding.EXTRA_SMALL} 0 15px;
    height: ${getHeightBySize(size)};
    border-radius: ${sizes.radius.SMALL};
    font-size: ${getFontSizeBySize(size)};
    cursor: pointer;
    transition: 0.25s background;

    ${variant === 'primary' &&
    css`
      min-width: 240px;
      width: 100%;
      border: 1px solid ${colors.base.NEUTRAL_300};
    `}

    ${variant === 'transparent' &&
    css`
      padding: 0 35px 0 0;
    `}

    ${isActive &&
    css`
      background: ${colors.base.NEUTRAL_100};
    `}
  `,
);

const SPlaceholder = styled.div`
  color: ${colors.text.LIGHT_DARK};
`;

const SAngleIcon = styled.div<{ isActive: boolean }>`
  position: absolute;
  right: 10px;
  color: ${colors.text.LIGHT_DARK};
  transition: 0.25s transform;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;

const SSelectBody = styled.div`
  position: absolute;
  z-index: ${ZIndex.SELECT};
  margin-top: 5px;
  min-width: 240px;
`;
