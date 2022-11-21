import { colors } from '@anagram/frontend-common';
import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  children: ReactElement | string | Array<string | ReactElement | undefined>;
  isFullWidth?: boolean;
}

export const Card: FC<IProps> = ({ isFullWidth = false, children }) => {
  return <SWrapper isFullWidth={isFullWidth}>{children}</SWrapper>;
};

const SWrapper = styled.div<{ isFullWidth: boolean }>`
  box-sizing: border-box;
  padding: 10px 20px;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: 5px;
  background: #fff;
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
`;
