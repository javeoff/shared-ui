import { ReactComponent as AngleDownIcon } from './img/angle-down.svg';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { ReactComponent as SearchIcon } from './img/search.svg';
import { IconWrapper } from '@shared/ui/components/app/Icon/components/IconWrapper/IconWrapper';

export const Icon = {
  AngleDown: IconWrapper(AngleDownIcon),
  Close: IconWrapper(CloseIcon),
  Search: IconWrapper(SearchIcon),
};
