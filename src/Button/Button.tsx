import { FC, ReactElement, ReactNode } from 'react';

import { SPrimaryButton } from '@anagram/ui/Button/styled/SPrimaryButton';
import { SSecondaryButton } from '@anagram/ui/Button/styled/SSecondaryButton';
import { STransparentButton } from '@anagram/ui/Button/styled/STransparentButton';
import { TButtonSize } from '@anagram/ui/Button/types/TButtonSize';
import { TButtonType } from '@anagram/ui/Button/types/TButtonType';
import { TButtonVariant } from '@anagram/ui/Button/types/TButtonVariant';

interface IProps {
  children: ReactNode;
  size?: TButtonSize;
  type?: TButtonType;
  variant?: TButtonVariant;
  className?: string;
}

export const Button: FC<IProps> = ({
  type = 'secondary',
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return <SPrimaryButton size={size} buttonType={type} {...props} />;
    case 'secondary':
      return <SSecondaryButton size={size} buttonType={type} {...props} />;
    default:
      return <STransparentButton size={size} buttonType={type} {...props} />;
  }
};
