import { TButtonSize } from '@anagram/ui/Button/types/TButtonSize';

const SMALL_SIZE = '0 12px';
const MEDIUM_SIZE = '0 20px';
const LARGE_SIZE = '0 25px';

// TODO: Заменить на common значения
export const getPaddingBySize = (size: TButtonSize): string => {
  if (size === 'sm') {
    return SMALL_SIZE;
  }

  if (size === 'lg') {
    return LARGE_SIZE;
  }

  return MEDIUM_SIZE;
};
