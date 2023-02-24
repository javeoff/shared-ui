import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactElement;
}

export const Skeleton: FC<IProps> = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

const SWrapper = styled.div`
  @keyframes changeBg {
    from {
      background: #eee;
    }
    to {
      background: #fff;
    }
  }

  animation: changeBg 0.3s ease-in-out;
`;
