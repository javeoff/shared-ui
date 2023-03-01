import { ChangeEvent, Dispatch, FC, ReactNode, InputHTMLAttributes } from 'react';

import {
	ContentContainer,
	IInputContentProps,
} from '@shared/ui/components/form/Input/components/ContentContainer/ContentContainer';
import { SInput } from '@shared/ui/components/form/Input/styled/SInput';
import { TInputSize } from '@shared/ui/components/form/Input/types/TInputSize';
import { IInputLabelProps, Label } from '@shared/ui/components/form/Label/Label';
import styled from 'styled-components';
import { ErrorContainer } from './components/ErrorContainer/ErrorContainer';

export interface IInputProps
	extends Omit<IInputLabelProps, 'children'>,
	IInputContentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
	size?: TInputSize;
	onChange?: Dispatch<string>;
	value?: string;
	disabled?: boolean;
	label?: ReactNode;
	error?: string;
	isFullWidth?: boolean;
}

export const Input: FC<IInputProps> = ({
	onChange,
	value,
	size,
	rightContent,
	leftContent,
	disabled = false,
	isFullWidth = false,
	label,
	error,
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
						isFullWidth={isFullWidth}
						error={error}
						{...props}
					/>
			</ContentContainer>
		</Label>
	);
};

