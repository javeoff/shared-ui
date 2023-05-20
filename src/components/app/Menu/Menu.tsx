import { colors } from '@shared/ui/common';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../../form';

interface IProps {
  children: ReactElement[] | ReactElement;
}

export const Menu = ({ children }: IProps): ReactElement => {
  return <SWrapper>{children}</SWrapper>;
};

interface IMenuItemProps {
  onClick: VoidFunction;
  children: ReactElement | string;
  isActive?: boolean;
  withCheckbox?: boolean;
}

export const MenuItem: FC<IMenuItemProps> = ({ 
  children, 
  onClick,
  withCheckbox = false,
  isActive,
}) => (
  <SMenuItemWrapper onClick={onClick}>
    <SItem>
      {!withCheckbox && children}
      {withCheckbox && (
        <Checkbox 
          option={children}
          checked={isActive} 
          onChange={() => {}}
        />
      )}
    </SItem>
  </SMenuItemWrapper>
);

Menu.Item = MenuItem;

const SWrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: 5px;
  background: ${colors.base.LIGHT};
`;

const SMenuItemWrapper = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const SItem = styled.div`
  box-sizing: border-box;
  padding: 8px 10px;
  border-bottom: 1px solid ${colors.base.NEUTRAL_200};
  text-align: left;
  font-size: 0.9rem;
  transition: background 0.25s;
  background: ${colors.base.LIGHT};
  color: ${colors.text.DARK};

  &:hover {
    background: ${colors.base.NEUTRAL_100};
  }
`;
