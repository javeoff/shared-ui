import { FontSize, colors } from "@shared/ui/common";
import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../app";

export interface ILabelProps {
	onClose?: VoidFunction;
	value: string;
	label: string;
}

export const Tag: FC<ILabelProps> = ({
	onClose,
	value,
	label,
}) => {
	return (
		<STag key={value}>
			<SContent>{label}</SContent>
			{onClose && (
				<div onClick={onClose}>
					<SCloseIcon />
				</div>
			)}
		</STag>
	)
}

const STag = styled.div`
	display: flex;
	width: max-content;
	align-items: center;
	overflow: hidden;
	justify-content: center;
	gap: 0 5px;
	font-size: ${FontSize.SMALL};
	color: ${colors.base.NEUTRAL_600};
	box-sizing: border-box;
	padding: 0 5px;
	border: 1px solid ${colors.base.NEUTRAL_300};
	border-radius: 3px;
`

const SContent = styled.div`
	text-overflow: ellipsis;
	overflow: hidden;
`

const SCloseIcon = styled(Icon.Close)`
	display: flex;
	align-self: center;
	width: 14px;
	height: 14px;
	cursor: pointer;
`
