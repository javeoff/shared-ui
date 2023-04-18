import { colors, FontSize } from "@shared/ui/common";
import { geistEllipsis } from "@shared/ui/common/utils/styles/geistEllipsis";
import { Label } from "@shared/ui/components/form";
import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { IAvatarProps } from "../../../Avatar/Avatar";
import { createWrapper } from "./utils/createWrapper";

interface IBaseEntityFieldProps {
	as?: 'div' | 'button';
	width?: string;
	isActive?: boolean;
	isRight?: boolean;
	isLabel?: boolean;
	isDisabled?: boolean;
	avatar: FC<IAvatarProps>;
}

interface ICommonEntityFieldProps extends IBaseEntityFieldProps {
	isLabel?: false;
	title?: ReactNode;
	description?: ReactNode;
}

interface ILabelEntityFieldProps extends IBaseEntityFieldProps {
	isLabel: true;
	title: ReactNode;
	description: ReactNode;
}

export type IEntityFieldProps = ICommonEntityFieldProps | ILabelEntityFieldProps

export const EntityField: FC<IEntityFieldProps> = ({
	as = 'div',
	title,
	description,
	isActive = true,
	isRight,
	isLabel,
}) => {
	let children: ReactNode = null;

	if (isLabel) {
		children = (
			<Label value={title}>
				{description}
			</Label>
		)
	}

	if (!isLabel) {
		children = (
			<>
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
			</>
		)
	}

	const SWrapper = createWrapper(as)

	return (
		<SWrapper
			isActive={isActive}
			isRight={isRight}
		>
			{children}
		</SWrapper>
	)
}

const STitle = styled.div<{ isActive: boolean; }>`
	width: 100%;
	font-size: ${FontSize.SMALL};
	color: ${colors.text.DARK};
	${({ isActive }) => !isActive && css`
		color: ${colors.text.LIGHT_DARK};
	`}
	font-weight: 500;
	${geistEllipsis}
`

const SDescription = styled.div`
	flex-shrink: 0;
	font-weight: 400;
	font-size: ${FontSize.SMALL};
	color: ${colors.text.LIGHT_DARK};
	${geistEllipsis}
`
