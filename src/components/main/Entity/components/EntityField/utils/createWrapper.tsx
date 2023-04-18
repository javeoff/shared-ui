import { Button } from "@shared/ui/components/main/Button/Button";
import styled, { css } from "styled-components";

export const createWrapper = (as = 'div') => {
	const getElementByAs = () => {
		if (as === 'button') {
			return styled(Button).attrs({ 
				size: 'lg',
				variant: 'outline'
			})`
				padding: 10px;
			`;
		}

		return as as 'div';
	}

	return styled(getElementByAs())<{ isActive: boolean; isRight: boolean; }>`
		display: flex;
		flex-grow: 1;
		flex: 1;
		flex-wrap: wrap;
		align-items: center;
		gap: 3px 0;
		min-width: 1px;
		max-width: 100%;
		${({ isActive }) => !isActive && css`
			cursor: default;
		`}
		${({ isRight }) => !!isRight && css`
			justify-content: space-between;
			justify-self: flex-end;
		`}
	`
}
