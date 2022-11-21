import { useState } from 'react';

type IResult = [boolean, VoidFunction];

export const useCheckbox = (): IResult => {
  const [state, setState] = useState<boolean>(false);

  const toggle = (): void => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};
