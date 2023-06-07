import { colors } from '@shared/ui/common';
import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  children: ReactElement | string | Array<string | ReactElement | undefined>;
  isFullWidth?: boolean;
  onClick?: VoidFunction;
}

export const Card: FC<IProps> = ({
  isFullWidth = false,
  onClick,
  children,
}) => {
  return (
    <SWrapper
      isFullWidth={isFullWidth}
      isHoverable={!!onClick}
      onClick={onClick}
    >
      {children}
    </SWrapper>
  );
};

const SWrapper = styled.div<{ 
  isFullWidth: boolean;
  isHoverable: boolean;
}>`
  box-sizing: border-box;
  padding: 10px 20px;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: 5px;
  background: ${colors.base.LIGHT};

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
  ${({ isHoverable }) =>
    isHoverable &&
    css`
      cursor: pointer;
      user-select: none;
      &:hover {
        background: ${colors.base.NEUTRAL_100};
      }
    `}
`;
