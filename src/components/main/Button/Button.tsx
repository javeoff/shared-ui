import { ButtonHTMLAttributes, FC, HTMLProps, ReactNode } from 'react';
import { SPrimaryButton } from './styled/SPrimaryButton';
import { SSecondaryButton } from './styled/SSecondaryButton';
import { STransparentButton } from './styled/STransparentButton';
import { TButtonSize } from './types/TButtonSize';
import { TButtonType } from './types/TButtonType';
import { TButtonVariant } from './types/TButtonVariant';

interface IProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	children: ReactNode;
	size?: TButtonSize;
	type?: TButtonType;
	variant?: TButtonVariant;
	className?: string;
	isFullWidth?: boolean;
}

export const Button: FC<IProps> = ({
	type = 'secondary',
	variant = 'primary',
	size = 'md',
	isFullWidth = false,
	...props
}) => {
	switch (variant) {
		case 'primary':
			return (
				<SPrimaryButton
					size={size}
					buttonType={type}
					isFullWidth={isFullWidth}
					{...props}
				/>
			);
		case 'secondary':
			return (
				<SSecondaryButton
					size={size}
					buttonType={type}
					isFullWidth={isFullWidth}
					{...props}
				/>
			);
		default:
			return (
				<STransparentButton
					size={size}
					buttonType={type}
					isFullWidth={isFullWidth}
					{...props}
				/>
			);
	}
};
