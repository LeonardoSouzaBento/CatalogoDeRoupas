export interface spanStyles {
  fontSize: string;
  fontWeight?: number;
}

export const defaultSpanStyles = {
  fontSize: "24px",
  fontWeight: 400,
};

export function writeSpanStyle(
  size: number = 22,
  weight: number = 400,
) {
  const convertedFontSize = (size / 18).toFixed(5);

  return {
    fontSize: `${convertedFontSize}em`,
    fontWeight: weight,
  };
}
