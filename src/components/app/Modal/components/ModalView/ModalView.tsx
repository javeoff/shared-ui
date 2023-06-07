import { colors } from '@shared/ui/common';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../../../Icon/Icon';
import { usePortalGroup } from './hooks/usePortalGroup';

export interface IModalViewProps {
	isActive: boolean;
	close?(): void;
	bottomContent?: JSX.Element;
	children: ReactNode;
	withBackIcon?: boolean;
	isFullScreen?: boolean;
}

export const APP_MODAL_GROUP_ID = 'app-modal-group';

export const ModalView: FC<IModalViewProps> = ({
	isActive,
	close,
	bottomContent,
	children,
	withBackIcon = false,
	isFullScreen = false,
}) => {
	return usePortalGroup(
		isActive,
		APP_MODAL_GROUP_ID,
		children ? (
			<SWrapper>
				<SBackground onClick={close} />
				<SModal isFullScreen={isFullScreen}>
					<SContainer>
						<SHeader>
							<SCloseIcon onClick={close}>
								{withBackIcon && (
									<SBackIcon>
										<Icon.Close size='sm' />
									</SBackIcon>
								)}
							</SCloseIcon>
						</SHeader>
						{children}
					</SContainer>
					{bottomContent &&
						<SBottomContent>
							<SContainer>
								{bottomContent}
							</SContainer>
						</SBottomContent>
					}
				</SModal>
			</SWrapper>
		) : null
	)
}

const SContainer = styled.div`
  margin: 0 auto;
	padding: 5px 10px;
`

const SWrapper = styled.div`
  position: fixed;
  z-index: 3;
	margin: 0 auto;
`

const SBackground = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, .25);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

	body.dark & {
		background: rgba(0, 0, 0, .75);
	}
`;

const SModal = styled.div<{ isFullScreen: boolean }>`
  overflow: scroll;
  z-index: 2;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);;
  background-color: ${colors.base.LIGHT};
	border: 1px solid ${colors.base.NEUTRAL_300};
	color: ${colors.base.NEUTRAL_700};
	margin: auto;

	${({ isFullScreen }) => isFullScreen && css`
		width: 100%;
		height: 100vh;
	`}
	${({ isFullScreen }) => !isFullScreen && css`
		min-width: 500px;
		border-radius: 5px;
	`}

  &::-webkit-scrollbar {
    display: none;
  }
  &:before {
    content: "";
    position: relative;
    top: -20px;
    display: block;
    margin: 0 auto;
    width: 90px;
    border-radius: 5px;
    height: 5px;
    background: #000;
  }
`;

const SBottomContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
	box-sizing: border-box;
  padding: 5px;
`;

const SHeader = styled.div`
	display: flex;
	justify-content: space-between;
`

const SCloseIcon = styled.div`
	margin-left: -10px;
	cursor: pointer;
`

const SBackIcon = styled.div`
	margin: 10px 0;
`
