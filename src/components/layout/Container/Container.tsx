import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
	isWrap?: boolean;
	isFlex?: boolean;
	isBetween?: boolean;
	gap?: number;
	children?: ReactNode;
	fullWidth?: boolean;
	margin?: string;
	padding?: string;
}

// TODO: Добавить аттрибут as

export const Container: FC<IProps> = ({
	children,
	fullWidth = true,
	gap = 0,
	...props
}) => {
	return (
		<SWrapper 
			fullWidth={fullWidth} 
			gap={gap} 
			{...props}
		>
			{children}
		</SWrapper>
	);
};

const SWrapper = styled.div<Exclude<IProps, 'children'>>`
  gap: ${({ isFlex, gap }) => (isFlex === true && gap ? `${gap}px` : '0')};
  display: ${({ isFlex }) => (isFlex === true ? 'flex' : 'block')};
  width: ${({ fullWidth }) => (fullWidth ? `100%` : 'fit-content')};
	flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'nowrap')};
	justify-content: ${({ isBetween }) => (isBetween ? 'space-between' : 'flex-start')};
	align-items: stretch;
	align-content: stretch;
	box-sizing: border-box;
	${({ margin }) => margin && `margin: ${margin};`};
	${({ padding }) => padding && `padding: ${padding};`};
`;
