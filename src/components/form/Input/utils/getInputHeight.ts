import { sizes } from "@shared/ui/common";
import { TInputSize } from "../types/TInputSize";

export const getInputHeight = (size: TInputSize) => {
	if (size === 'sm') {
		return sizes.height.SMALL;
	}

	return sizes.height.MEDIUM
}
