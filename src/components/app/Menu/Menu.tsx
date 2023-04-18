import { colors } from '@shared/ui/common';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactElement[] | ReactElement;
}

export const Menu = ({ children }: IProps): ReactElement => {
  return <SWrapper>{children}</SWrapper>;
};

interface IMenuItemProps {
  href: string;
  children: ReactElement | string;
}

export const MenuItem: FC<IMenuItemProps> = ({ href, children }) => (
  <SMenuItemWrapper>
    <a href={href}>
      <SItem>{children}</SItem>
    </a>
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
  background: ${colors.base.LIGHT};

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
  background: #000;
  color: ${colors.text.DARK};

  &:hover {
    background: ${colors.base.NEUTRAL_100};
  }
`;
