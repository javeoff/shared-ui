import { colors } from "@shared/ui/common"
import { TAs } from "@shared/ui/common/types/TAs";
import { getStyledAs } from "@shared/ui/common/utils/styled/getStyledAs";
import { FC, ReactNode } from "react";
import styled, { css } from "styled-components"

interface IProps {
	as?: TAs;
	isDisabled?: boolean;
	children: ReactNode;
}

export const Entity: FC<IProps> = ({ 
	as = 'div',
	children,
	isDisabled = false,
}) => {
	return (
		<SWrapper as={getStyledAs(as)} isDisabled={isDisabled}>
			{children}
		</SWrapper>
	)
}

export const SWrapper = styled.div<{ isDisabled: boolean }>`
	background: ${colors.base.LIGHT};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 24px;
  border: 1px solid ${colors.base.NEUTRAL_300};
	box-sizing: border-box;
  border-radius: 5px;
	padding: 16px;
	${({ isDisabled }) => !!isDisabled && css`
		background: ${colors.base.NEUTRAL_200};
		cursor: not-allowed;
		& * {
			opacity: 0.75;
		}
	`}

	@media (max-width: 600px) {
		gap: 16px;
		flex-direction: column;

		& > *:not(:first-child) {
			border-top: 1px solid ${colors.base.NEUTRAL_300};
			padding-top: 16px;
		}
	}
`
