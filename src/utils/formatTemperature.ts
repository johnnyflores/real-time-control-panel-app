export function formatTemperature(temperature: number, digits = 1) {
  return `${temperature.toFixed(digits)}°C`;
}
