import { colors, sizes } from '@shared/ui/common';
import styled, { css } from 'styled-components';

import { TInputSize } from '@shared/ui/components/form/Input/types/TInputSize';

export const SInput = styled.input<{
  inputSize?: TInputSize;
	isFullWidth?: boolean;
	error?: string;
}>`
	position: relative;
  display: block;
  box-sizing: border-box;
  padding: 0 ${sizes.padding.EXTRA_SMALL};
	${({ isFullWidth }) => !isFullWidth && `min-width: 240px;`}
	${({ isFullWidth }) => !isFullWidth && `max-width: 240px;`}
  width: 100%;
  height: ${sizes.height.MEDIUM};
  outline: 0;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: ${sizes.radius.SMALL};
  font-size: ${sizes.font.SMALL};
  line-height: normal;
  transition: 0.25s border ease-in-out;
  background: ${colors.base.LIGHT};
  color: ${colors.text.DARK};

  &:focus {
    border-color: ${colors.base.NEUTRAL_500};
  }

  &::placeholder {
    color: ${colors.base.NEUTRAL_400};
    font-weight: 400;
  }

  &:disabled {
    background: ${colors.base.NEUTRAL_200};
    cursor: not-allowed;
  }

	${({ error }) => error && css`
		border-color: red;
	`}
`;
