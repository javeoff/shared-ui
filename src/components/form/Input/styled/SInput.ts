import { colors, sizes } from '@anagram/ui/common';
import styled from 'styled-components';

import { TInputSize } from '@anagram/ui/components/form/Input/types/TInputSize';

export const SInput = styled.input<{
  inputSize?: TInputSize;
}>`
  display: block;
  box-sizing: border-box;
  padding: 0 ${sizes.padding.EXTRA_SMALL};
  min-width: 240px;
  width: 100%;
  height: ${sizes.height.MEDIUM};
  outline: 0;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: ${sizes.radius.SMALL};
  font-size: ${sizes.font.SMALL};
  line-height: normal;
  transition: 0.25s border ease-in-out;

  &:focus {
    border-color: ${colors.base.NEUTRAL_500};
  }

  &::placeholder {
    color: ${colors.base.NEUTRAL_400};
    font-weight: lighter;
  }

  &:disabled {
    background: ${colors.base.NEUTRAL_200};
    cursor: not-allowed;
  }
`;
