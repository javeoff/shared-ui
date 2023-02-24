import { colors } from '@anagram/ui/common';
import { Dispatch, FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as CheckIcon } from './img/Check.svg';
import { Label } from '@anagram/ui/components/form/Label/Label';

// TODO: Make creator
// FIXME: oh no error
interface IProps {
  checked: boolean;
  onChange: Dispatch<boolean>;
  label?: string | ReactElement;
  option: string;
}

export const Checkbox: FC<IProps> = ({ checked, label, onChange, option }) => {
  return (
    <SLabel value={label}>
      <SInput type='checkbox' />
      <SWrapper onClick={() => onChange(!checked)}>
        <SCheckbox isActive={checked}>{checked && <CheckIcon />}</SCheckbox>
        {option}
      </SWrapper>
    </SLabel>
  );
};

const SLabel = styled(Label)`
  margin-bottom: 20px;
`;

export const SInput = styled.input`
  position: absolute;
  margin: -1px;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

const SWrapper = styled.div`
  user-select: none;
  gap: 0 10px;
  display: flex;
  color: ${colors.text.DARK};
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
`;

const SCheckbox = styled.div<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: 3px;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${colors.accent.ACCENT_BLUE_100};
      background: ${colors.accent.ACCENT_BLUE_400};
      & svg {
        color: #fff;
      }
    `}
`;
