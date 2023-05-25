import { colors } from '@shared/ui/common';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  children?: ReactElement;
}

export const Skeleton: FC<IProps> = ({ className, children }) => {
  return <SWrapper className={className}>{children}</SWrapper>;
};

const SWrapper = styled.div`
  background-image: linear-gradient(270deg,
		${colors.base.NEUTRAL_100},
		${colors.base.NEUTRAL_200},
		${colors.base.NEUTRAL_200},
		${colors.base.NEUTRAL_100}
	 );
  background-size: 400% 100%;

  @keyframes changeBg {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  animation: changeBg 8s ease-in-out infinite
`;
