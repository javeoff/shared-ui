import { colors, isDarkMode } from '@shared/ui/common';
import { Dispatch, FC, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as CheckIcon } from './img/Check.svg';
import { Label } from '@shared/ui/components/form/Label/Label';

interface IProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange: Dispatch<boolean>;
  label?: string | ReactElement;
  option: ReactNode;
  isLeft?: boolean;
}

export const Checkbox: FC<IProps> = ({
  defaultChecked = false,
  checked,
  label,
  onChange,
  option,
  isLeft = true,
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);

  useEffect(() => {
    setCheckedState(checked)
  }, [checked])

  const clickHandle = () => {
    if (checked === undefined) {
      setCheckedState(!checkedState);
    }

    onChange(!checkedState);
  }

  return (
    <SLabel value={label}>
      <SInput type='checkbox' />
      <SWrapper>
        <SRow onClick={clickHandle}>
          {isLeft && <div>{option}</div>}
          <SCheckbox isActive={checkedState}>{checkedState && <CheckIcon />}</SCheckbox>
          {!isLeft && <div>{option}</div>}
        </SRow>
      </SWrapper>
    </SLabel>
  );
};

const SLabel = styled(Label)`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const SInput = styled.input`
  position: absolute;
  margin: -1px;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

const SRow = styled.div`
  user-select: none;
  gap: 0 5px;
  display: flex;
  justify-content: flex-start;
  color: ${colors.text.DARK};
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
`;

const SWrapper = styled.div`
  display: block;
  flex-grow: 1;
`

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
