import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  children?: ReactElement;
  src: string;
}

export const AvatarImage: FC<IProps> = ({ children, ...props }) => (
  <SAvatar {...props}>{children}</SAvatar>
);

export default AvatarImage;

export const SAvatar = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
