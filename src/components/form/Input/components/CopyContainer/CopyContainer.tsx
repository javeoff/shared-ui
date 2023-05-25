import { colors } from "@shared/ui/common";
import { Icon } from "@shared/ui/components/app";
import { Button } from "@shared/ui/components/main";
import { FC, ReactElement } from "react";
import styled from "styled-components";

interface IProps {
	isCopyable: boolean;
	value: string;
	children: ReactElement;
}

export const CopyContainer: FC<IProps> = ({
	isCopyable,
	value,
	children,
}) => {
	const clickHandle = () => {
		navigator.clipboard.writeText(value)
	}

	if (!isCopyable) {
		return children;
	}

	return (
		<SWrapper>
			{children}
			<SButtonWrapper>
				<SButton
					onClick={clickHandle}
					size='sm'
				>
					<Icon.Copy size='sm' />
				</SButton>
			</SButtonWrapper>
		</SWrapper>
	)
}

const SButton = styled(Button)`
	height: auto;
	padding: 3px;

	&:hover {
		background: ${colors.base.NEUTRAL_200};
	}

	&:active {
		background: ${colors.base.NEUTRAL_300};
	}
`

const SButtonWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 5px;
`

const SWrapper = styled.div`
	position: relative;
	margin: auto;

	& ${SButton} {
		display: none;
	}

	&:hover ${SButton} {
		display: block;
	}
`
