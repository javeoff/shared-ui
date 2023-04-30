import { KeyboardEvent, useRef } from 'react';
import { IMultiInputTag } from './useMultiInputTags';

interface IResult {
	inputRef: React.RefObject<HTMLInputElement>;
	keyPressHandle: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useMultiInput = (
	onLastTagDelete: VoidFunction,
	onTagAdd: (tag: IMultiInputTag) => void,
	tags: IMultiInputTag[],
): IResult => {
	const inputRef = useRef<HTMLInputElement>(null);

	const keyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
		if (!inputRef.current) {
			return;
		}

		const value = e.currentTarget.value;

		if (e.key === 'Enter' || e.key === ',') {
			e.preventDefault();
			enterPressHandle(e);
			return;
		}

		if (e.key === 'Backspace' && !value && tags.length > 0) {
			e.preventDefault();
			onLastTagDelete()
			return;
		}
	}

	const enterPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (value && tags.length < 3) {
			onTagAdd({
				label: value,
				value,
			})
			inputRef.current.value = '';
		}
	}

	return {
		keyPressHandle,
		inputRef,
	}
}
