import { ChangeEvent, Dispatch, FC, ReactNode } from 'react';

import {
  ContentContainer,
  IInputContentProps,
} from '@shared/ui/components/form/Input/components/ContentContainer/ContentContainer';
import { SInput } from '@shared/ui/components/form/Input/styled/SInput';
import { TInputSize } from '@shared/ui/components/form/Input/types/TInputSize';
import { IInputLabelProps, Label } from '@shared/ui/components/form/Label/Label';

export interface IInputProps
  extends Omit<IInputLabelProps, 'children'>,
    IInputContentProps {
  size?: TInputSize;
  onChange?: Dispatch<string>;
  value?: string;
  disabled?: boolean;
  label?: ReactNode;
}

export const Input: FC<IInputProps> = ({
  onChange,
  value,
  size,
  rightContent,
  leftContent,
  disabled = false,
  label,
  ...props
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!onChange) {
      return;
    }

    onChange(e.currentTarget?.value);
  };

  return (
    <Label value={label}>
      <ContentContainer rightContent={rightContent} leftContent={leftContent}>
        <SInput
          onChange={onInputChange}
          value={value}
          inputSize={size}
          disabled={disabled}
          {...props}
        />
      </ContentContainer>
    </Label>
  );
};
