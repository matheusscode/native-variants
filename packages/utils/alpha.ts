export type AlphaValue =
  | "05"
  | "10"
  | "15"
  | "20"
  | "25"
  | "30"
  | "35"
  | "40"
  | "45"
  | "50"
  | "55"
  | "60"
  | "65"
  | "70"
  | "75"
  | "80"
  | "85"
  | "90"
  | "95"
  | "100";

export const alpha = (color: string, opacity: AlphaValue): string | null => {
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    console.error("A cor fornecida não está em um formato válido.");
    return null;
  }
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);

  const alpha = parseInt(opacity) / 100;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
