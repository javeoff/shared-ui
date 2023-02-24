import { ZIndex } from '@anagram/ui/common';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  isActive?: boolean;
  onClose?: VoidFunction;
  children?: ReactNode;
}

export const Modal: FC<IProps> = ({ isActive, onClose, children }) => {
  if (!isActive) {
    return null;
  }
  console.log('MODAL');

  return (
    <SWrapper>
      <SBackground onClick={onClose} />
      <SContainer>
        {children}
      </SContainer>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${ZIndex.MODAL_WRAPPER};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const SContainer = styled.div`
  z-index: ${ZIndex.MODAL};
  padding: 10px;
  min-width: 200px;
  min-height: 300px;
  background: #fff;
`;
