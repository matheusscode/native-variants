import { DefaultTheme } from "@/providers";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type StyleProps = Partial<ImageStyle | TextStyle | ViewStyle>;

export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0];

type VariantValues<V> = keyof V;
type VariantsMap<V> = {
  [K in keyof V]?: VariantValues<V[K]>;
};

export type DefaultVariantProps<T> = {
  [K in keyof T]: keyof T[K];
};

export type SlotDefaultVariants<V extends Record<string, VariantOptions<any>>> =
  {
    [K in keyof V]?: VariantsMap<V[K]["variants"]>;
  };

export type VariantOptions<
  V extends Record<string, Record<string, StyleProps>>,
> = {
  base?: StyleProps;
  variants?: V;
  defaultVariants?: {
    [K in keyof V]: keyof V[K];
  };
};

export type OptionParams = {
  theme?: DefaultTheme;
  width: (percentage: string | number) => number;
  height: (percentage: string | number) => number;
};
