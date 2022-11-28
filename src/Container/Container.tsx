import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  row?: boolean;
  gap?: number;
  children?: ReactNode;
  fullWidth?: boolean;
}

// TODO: Добавить аттрибут - as

export const Container: FC<IProps> = ({
  children,
  fullWidth = true,
  ...props
}) => {
  return (
    <SWrapper fullWidth={fullWidth} {...props}>
      {children}
    </SWrapper>
  );
};

const SWrapper = styled.div<Exclude<IProps, 'children'>>`
  gap: ${({ row, gap }) => (row === true && gap ? `${gap}px` : '0')};
  display: ${({ row }) => (row === true ? 'flex' : 'block')};
  width: ${({ fullWidth }) => (fullWidth ? `100%` : 'fit-content')};
`;
