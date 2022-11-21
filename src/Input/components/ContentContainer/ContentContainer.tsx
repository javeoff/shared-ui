import { colors, sizes } from '@anagram/frontend-common';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { SInput } from '@anagram/ui/Input/styled/SInput';

export interface IInputContentProps {
  leftContent?: ReactElement | string;
  rightContent?: ReactElement | string;
}

export const ContentContainer: FC<
  IInputContentProps & { children: ReactElement }
> = ({ leftContent, rightContent, children }) => {
  if (leftContent || rightContent) {
    return (
      <SWrapper>
        {leftContent && (
          <SLeftContent>
            <div>{leftContent}</div>
          </SLeftContent>
        )}
        {children}
        {rightContent && (
          <SRightContent>
            <div>{rightContent}</div>
          </SRightContent>
        )}
      </SWrapper>
    );
  }

  return children;
};

const SLeftContent = styled.div`
  padding-left: ${sizes.padding.EXTRA_SMALL};
`;

const SRightContent = styled.div`
  padding-right: ${sizes.padding.EXTRA_SMALL};
`;

const SWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${sizes.height.MEDIUM};
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: ${sizes.radius.SMALL};
  transition: 0.25s border ease-in-out;

  ${SInput} {
    border: 0;
  }

  &:focus-within {
    border-color: ${colors.base.NEUTRAL_500};
  }

  &:has(> input:disabled) {
    background: ${colors.base.NEUTRAL_200};
    cursor: not-allowed;
  }

  ${SLeftContent} div, ${SRightContent} div {
    user-select: none;
    color: ${colors.text.LIGHT_DARK};
    font-size: 0.875rem;
  }
`;
