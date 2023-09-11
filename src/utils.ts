export const applyMinMax = (
  value: number,
  { min = value, max = value }: { min?: number; max?: number },
) => {
  return value < min ? min : value > max ? max : value;
};
