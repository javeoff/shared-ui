import { useState } from "react";

export interface IMultiInputTag {
	label: string;
	value: string;
}

interface IResult {
	tags: IMultiInputTag[];
	onAdd: (tag: IMultiInputTag) => void;
	onRemove: (idx: number) => void;
}

export const useMultiInputTags = (initialTags?: IMultiInputTag[]): IResult => {
	const [tags, setTags] = useState<IMultiInputTag[]>(initialTags || []);

	const onAdd = (tag: IMultiInputTag) => {
		setTags((prev) => [...prev, tag]);
	}

	const onRemove = (idx: number) =>{
		setTags((prev) => prev.filter((_, i) => i !== idx));
	}

	return {
		tags,
		onAdd,
		onRemove,
	}	
}
