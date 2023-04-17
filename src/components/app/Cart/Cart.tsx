import { colors, ZIndex } from '@shared/ui/common';
import { Dropdown } from '@shared/ui/features';
import { Image } from '../Image/Image';
import { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from './img/cart.svg';
import { Button } from '../../main';

interface IItem {
	id: string;
	name: string;
	price: number;
	count: number;
	image?: string;
}

interface IProps {
	items: IItem[];
	onCartOpen?: VoidFunction;
	onProductClick?: (id: string) => void;
	isDisabledOnCartHover?: boolean;
}

export const Cart: FC<IProps> = ({ 
	items,
	onCartOpen, 
	onProductClick,
	isDisabledOnCartHover,
}) => {
	return (
		<SWrapper>
			<Dropdown
				eventName='mouseover'
				isAutoClose={true}
				content={(props) => (
					<SIcon
						onMouseEnter={!!items.length ? props.onOpen : undefined}
						onClick={onCartOpen}
					>
						<CartIcon height={20} />
						{!!items.length && <SCounter>{items.length}</SCounter>}
					</SIcon>
				)}
			>
				{() => !isDisabledOnCartHover && (
					<SContent>
						<SHoverMask />
						{items.map((item) => (
							<SItem onClick={onProductClick ? () => onProductClick(item.id) : undefined}>
								<SItemLeft>
									<Image
										imageUrl={item.image}
										width={30}
										height={30}
									/>
									<SName>
										{item.name}
									</SName>
								</SItemLeft>
								<SPrice>
									{item.price} ₽
								</SPrice>
							</SItem>
						))}
						<Button 
							variant='secondary'
							isFullWidth={true}
							onClick={onCartOpen}
						>
							Открыть корзину
						</Button>
					</SContent>
				)}
			</Dropdown>
		</SWrapper>
	)
}

const SItem = styled.div`
	padding: 10px 5px;
	display: flex;
	flex-wrap: nowrap;
	gap: 0 10px;
	cursor: pointer;
	white-space: nowrap;
	text-overflow:ellipsis;
	justify-content: space-between;

	&:not(:last-child) {
		border-bottom: 1px solid ${colors.base.NEUTRAL_200};
	}
`

const SName = styled.div`
	text-overflow:ellipsis;
	overflow:hidden;
`

const SHoverMask = styled.div`
	opacity: 0;
	position: absolute;
	top: -12px;
	right: 0;
	width: 50px;
	height: 12px;
`

const SWrapper = styled.div`
	position: relative;
`

const SItemLeft = styled.div`
	display: flex;
	gap: 0 5px;
	flex-wrap: nowrap;
	overflow: hidden;
`

const SCounter = styled.div`
	position: absolute;
	width: 8px;
	height: 8px;
	bottom: -5px;
	right: -5px;
	z-index: ${ZIndex.POPUP + 1};
	font-size: 0.35rem;
	text-align: center;
	line-height: 8px;
	color: #fff;
	background: ${colors.base.NEUTRAL_600};
	border-radius: 100px;
`

const SContent = styled.div`
	position: absolute;
	padding: 10px 10px;
	box-sizing: border-box;
	z-index: ${ZIndex.POPUP};
	right: -100%;
	border: 1px solid ${colors.base.NEUTRAL_200};
	margin-right: 20px;
	top: 30px;
	width: 350px;
	min-height: 200px;
	background: #fff;
`

const SPrice = styled.div`
	font-weight: 600;

`

const SIcon = styled.div`
	display: flex;
	cursor: pointer;
	svg {
		fill: ${colors.base.NEUTRAL_600}
	}
`
