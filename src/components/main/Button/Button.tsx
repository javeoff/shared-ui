import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { SPrimaryButton } from './styled/SPrimaryButton';
import { SSecondaryButton } from './styled/SSecondaryButton';
import { STransparentButton } from './styled/STransparentButton';
import { TButtonSize } from './types/TButtonSize';
import { TButtonType } from './types/TButtonType';
import { TButtonVariant } from './types/TButtonVariant';

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	children: ReactNode;
	size?: TButtonSize;
	type?: TButtonType;
	variant?: TButtonVariant;
	className?: string;
	isFullWidth?: boolean;
}

export const Button: FC<IButtonProps> = ({
	type = 'secondary',
	variant = 'primary',
	size = 'md',
	isFullWidth = false,
	className,
	...props
}) => {
	switch (variant) {
		case 'primary':
			return (
				<SPrimaryButton
					size={size}
					buttonType={type}
					isFullWidth={isFullWidth}
					className={className}
					{...props}
				/>
			);
		case 'secondary':
			return (
				<SSecondaryButton
					size={size}
					buttonType={type}
					isFullWidth={isFullWidth}
					className={className}
					{...props}
				/>
			);
		default:
			return (
				<STransparentButton
					size={size}
					buttonType={type}
					isFullWidth={isFullWidth}
					className={className}
					{...props}
				/>
			);
	}
};
