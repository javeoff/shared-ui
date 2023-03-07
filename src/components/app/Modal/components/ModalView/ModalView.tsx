import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { usePortalGroup } from './hooks/usePortalGroup';

export interface IModalViewProps {
	isActive: boolean;
	close?(): void;
	bottomContent?: JSX.Element;
	children: ReactNode;
}

export const APP_MODAL_GROUP_ID = 'app-modal-group';

export const ModalView: FC<IModalViewProps> = ({
	isActive,
	close,
	bottomContent,
	children,
}) => {
	return usePortalGroup(
		isActive,
		APP_MODAL_GROUP_ID,
		children ? (
			<SWrapper>
				<SBackground onClick={close} />
				<SModal>
					<SContainer>
						<SHeader>
							<SCloseIcon onClick={close}>
								<img src="/close.svg" alt="close" width="40" />
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
  max-width: 600px;
  margin: 0 auto;
	padding: 5px 10px;
`

const SWrapper = styled.div`
  position: fixed;
  z-index: 3;
	max-width: 300px;
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
`;

const SModal = styled.div`
  overflow: scroll;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
  width: 100%;
  height: 100vh;
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
