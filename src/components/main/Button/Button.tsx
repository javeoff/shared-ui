import { ButtonHTMLAttributes, FC, HTMLProps, ReactNode } from 'react';

import { SPrimaryButton } from '@anagram/ui/components/main/Button/styled/SPrimaryButton';
import { SSecondaryButton } from '@anagram/ui/components/main/Button/styled/SSecondaryButton';
import { STransparentButton } from '@anagram/ui/components/main/Button/styled/STransparentButton';
import { TButtonSize } from '@anagram/ui/components/main/Button/types/TButtonSize';
import { TButtonType } from '@anagram/ui/components/main/Button/types/TButtonType';
import { TButtonVariant } from '@anagram/ui/components/main/Button/types/TButtonVariant';


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
