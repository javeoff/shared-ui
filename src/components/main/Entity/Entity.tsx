import { colors } from "@shared/ui/common"
import { FC, ReactNode } from "react";
import styled from "styled-components"

interface IProps {
	children: ReactNode;
}

export const Entity: FC<IProps> = ({ children }) => {
	return (
		<SWrapper>
			{children}
		</SWrapper>
	)
}


export const SWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: 5px;
	padding: 16px;
`
