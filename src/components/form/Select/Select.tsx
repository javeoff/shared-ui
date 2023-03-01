import { colors, sizes } from '@shared/ui/common';
import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { Dropdown } from '../../../features/Dropdown/Dropdown';
import { Icon } from '@shared/ui/components/app/Icon/Icon';
import { Label } from '@shared/ui/components/form/Label/Label';
import { SelectBody } from '@shared/ui/components/form/Select/components/SelectBody/SelectBody';
import { TSelectSize } from '@shared/ui/components/form/Select/types/TSelectSize';
import { TSelectVariant } from '@shared/ui/components/form/Select/types/TSelectVariant';

export interface ISelectProps {
  variant?: TSelectVariant;
  size?: TSelectSize;
  label?: string | undefined;
  placeholder?: string;
  values: Array<string | ReactElement>;
  activeValueIdx: number | undefined;
  onChange(valueIdx?: number): void;
	required?: boolean;
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
	required = true,
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
								if (!required && activeValueIdx === idx) {
									onChange();
									return;
								}

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
      return sizes.font.SMALL;
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
  z-index: 5;
  margin-top: 5px;
  min-width: 240px;
`;
