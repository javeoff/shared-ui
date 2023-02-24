import { colors } from '@anagram/ui/common';
import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface IInputLabelProps {
  value?: ReactNode;
  children: ReactNode;
}

export const Label: FC<IInputLabelProps> = ({ value, children }) => {
  if (value === undefined) {
    return children as ReactElement;
  }

  return (
    <SWrapper>
      <SLabel>{value}</SLabel>
      {children}
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: 100%;
`;

const SLabel = styled.div`
  user-select: none;
  margin-bottom: 5px;
  color: ${colors.text.LIGHT_DARK};
  text-transform: uppercase;
  font-size: 0.875rem;
`;
