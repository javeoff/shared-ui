const toUpperCamelCase = (key: string): string =>
  key.toLowerCase().split('_')!.join('-');

export const getCssParams = (
  collection: Record<string, string>,
): Record<string, string> => {
  const paramsEntries = Object.values(collection).map((key) => {
    return [key, `var(--${toUpperCamelCase(key)})`];
  });

  return Object.fromEntries(paramsEntries);
};
