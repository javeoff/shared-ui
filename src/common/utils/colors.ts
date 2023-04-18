import { AccentColor, BaseColor, TextColor } from '@shared/ui/common/enums';
import { DarkBaseColor } from '../enums/darkModeColors/DarkBaseColor';
import { DarkTextColor } from '../enums/darkModeColors/DarkTextColor';
import { getIsDarkMode } from './darkMode/getIsDarkMode';

const getColors = () => {
  const isDarkMode = getIsDarkMode();

  if (isDarkMode) {
    return {
      base: DarkBaseColor,
      accent: AccentColor,
      text: DarkTextColor,
    }
  }

  return {
    base: BaseColor,
    accent: AccentColor,
    text: TextColor,
  }
}

export const colors = getColors();
