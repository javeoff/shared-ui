import { colors } from '@anagram/frontend-common';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IMenuItemProps {
  href: string;
  children: ReactElement | string;
}

export const MenuItem: FC<IMenuItemProps> = ({ href, children }) => (
  <SWrapper>
    <a href={href}>
      <SItem>{children}</SItem>
    </a>
  </SWrapper>
);

const SWrapper = styled.div`
  width: 100%;

  a {
    color: #000;
    text-decoration: none;
  }
`;

const SItem = styled.div`
  box-sizing: border-box;
  padding: 8px 10px;
  border-bottom: 1px solid ${colors.base.NEUTRAL_200};
  background: #fff;
  text-align: left;
  font-size: 0.9rem;
  transition: background 0.25s;

  &:hover {
    background: ${colors.base.NEUTRAL_100};
  }
`;
