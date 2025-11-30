export function generateFontSizes(minFontSize: number, maxFontSize: number) {
  // Conversão para EM nos tamanhos base dos breakpoints
  const baseMin = minFontSize / 17.5; // até sm
  const baseMax = maxFontSize / 18.5; // xl

  // Breakpoints do Tailwind considerados para escala
  const breakpoints = ["sm", "md", "lg", "xl"];

  // Passo de crescimento entre sm → xl
  const steps = breakpoints.length; // 4 passos
  const stepValue = (baseMax - baseMin) / steps;

  const values: Record<string, number> = {};

  // Valor para mobile (antes do sm)
  values["base"] = baseMin;

  // sm → xl
  breakpoints.forEach((bp, index) => {
    values[bp] = baseMin + stepValue * (index + 1);
  });

  // 2xl = projeção do próximo passo
  values["2xl"] = values["xl"] + stepValue;

  // Monta string no formato Tailwind
  const result =
    `text-[${values.base.toFixed(6)}em] ` +
    breakpoints
      .map((bp) => `${bp}:text-[${values[bp].toFixed(6)}em]`)
      .join(" ") +
    ` 2xl:text-[${values["2xl"].toFixed(6)}em]`;

  return result;
}
