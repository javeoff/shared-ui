import { colors, FontSize } from "@shared/ui/common";
import { FC } from "react";
import styled, { css } from "styled-components";
import { IAvatarProps } from "../../../Avatar/Avatar";

export interface IEntityFieldProps {
	title?: string;
	description?: string;
	width?: string;
	isActive?: boolean;
	isRight?: boolean;
	isLabel?: boolean;
	avatar: FC<IAvatarProps>;
}

export const EntityField: FC<IEntityFieldProps> = ({
	title,
	description,
	width,
	isActive = true,
	isRight,
	isLabel,
	avatar
}) => {
	return (
		<SWrapper isActive={isActive} isRight={isRight}>
			{!!title && (
				<STitle
					isActive={isActive}
				>
				{title}
				</STitle>
			)}
			{!!description && (
				<SDescription>
					{description}
				</SDescription>
			)}
		</SWrapper>
	)
}

const SWrapper = styled.div<{ isActive: boolean; isRight: boolean }>`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	align-items: center;
	gap: 3px 0;
	${({ isActive }) => !isActive && css`
		cursor: default;
	`}
	${({ isRight }) => !!isRight && css`
		justify-content: flex-end;
	`}
`

const STitle = styled.div<{ isActive: boolean; }>`
	width: 100%;
	font-size: ${FontSize.SMALL};
	${({ isActive }) => !isActive && css`
		color: ${colors.text.LIGHT_DARK};
	`}
	font-weight: 500;
`

const SDescription = styled.div`
	flex-shrink: 0;
	font-weight: 400;
	font-size: ${FontSize.SMALL};
	color: ${colors.text.LIGHT_DARK};
`
