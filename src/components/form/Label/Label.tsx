import { colors } from '@shared/ui/common';
import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface IInputLabelProps {
  value?: ReactNode;
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export const Label: FC<IInputLabelProps> = ({ 
  value, 
  children, 
  className,
  isFullWidth = false,
}) => {
  if (value === undefined) {
    return children as ReactElement;
  }

  return (
    <SWrapper className={className} isFullWidth={isFullWidth}>
      <SLabel>{value}</SLabel>
      {children}
    </SWrapper>
  );
};

const SWrapper = styled.div<{ isFullWidth: boolean }>`
  ${({ isFullWidth }) => isFullWidth && `width: 100%;`}
`;

const SLabel = styled.div`
  width: 100%;
  user-select: none;
  margin-bottom: 5px;
  color: ${colors.text.LIGHT_DARK};
  text-transform: uppercase;
  font-size: 0.875rem;
`;
