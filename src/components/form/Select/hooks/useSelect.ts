import { Dispatch, SetStateAction, useState } from 'react';

interface IResult {
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
  activeValueIdx: number | undefined;
  onChange(activeValueIdx: number): void;
}

export const useSelect = (
  initialValues: string[],
  initialActiveValueIdx?: number,
): IResult => {
  const [activeValueIdx, setActiveValueIdx] = useState<number | undefined>(
    initialActiveValueIdx,
  );
  const [values, setValues] = useState<string[]>(initialValues);

  return {
    values,
    setValues,
    activeValueIdx,
    onChange: (activeValueIdx) => setActiveValueIdx(activeValueIdx),
  };
};
