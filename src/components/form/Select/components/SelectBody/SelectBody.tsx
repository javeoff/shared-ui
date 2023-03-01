import { colors, sizes } from '@shared/ui/common';
import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface ISelectBodyProps {
  values: Array<string | ReactElement>;
  onChange(activeIdx?: number): void;
  isActive: boolean;
  activeValueIdx: number | undefined;
}

export const SelectBody: FC<ISelectBodyProps> = ({
  isActive,
  activeValueIdx,
  values,
  onChange,
}) => {
  if (!isActive) {
    return null;
  }

  return (
    <SWrapper>
      {values.map((value, idx) => (
        <SSelectItem
          isActive={activeValueIdx === idx}
					onClick={() => onChange(idx)}
        >
          {value}
        </SSelectItem>
      ))}
    </SWrapper>
  );
};

const SWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  max-height: 300px;
  width: 100%;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: 5px;
  background: #fff;
	z-index: 5;
`;

const SSelectItem = styled.div<{ isActive: boolean }>`
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid ${colors.base.NEUTRAL_300};
  font-size: ${sizes.font.SMALL};
  cursor: pointer;

  &:hover {
    background: ${colors.base.NEUTRAL_100};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${colors.base.NEUTRAL_100};
      font-weight: 600;
    `}
`;
