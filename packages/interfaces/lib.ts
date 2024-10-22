import { ImageStyle, TextStyle, ViewStyle } from "react-native";

/**
 * Represents the style properties for a component.
 * This type is a partial combination of React Native's ImageStyle, TextStyle, and ViewStyle.
 *
 * @typedef {Partial<ImageStyle | TextStyle | ViewStyle>} StyleProps
 */
export type StyleProps = Partial<ImageStyle | TextStyle | ViewStyle>;

/**
 * Extracts the variant properties from a given function type.
 *
 * @template T - A function type that takes parameters.
 * @typedef {Parameters<T>[0]} VariantProps
 */
export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0];

/**
 * Represents the default variant properties for a given variant type.
 *
 * @template T - A record of variants where each key maps to its respective styles.
 * @typedef {Record<K in keyof T]: keyof T[K]} NVDefaultVariantProps
 */
export type NVDefaultVariantProps<T> = {
  [K in keyof T]: keyof T[K];
};

/**
 * Defines the options for the `av` function, allowing for base styles,
 * variants, and slots.
 *
 * @template V - A record of variant styles where each key represents a variant and
 *               maps to its respective styles.
 * @template S - A record of slot styles where each key represents a slot and maps
 *               to its respective styles.
 *
 * @typedef {
 *   | { base?: StyleProps; variants?: V; defaultVariants?: Partial<NVDefaultVariantProps<V>> }
 *   | { slots: S }
 * } NVOptions
 */
export type NVOptions<
  V extends Record<string, Record<string, StyleProps>>,
  S extends Record<string, StyleProps> = Record<string, StyleProps>,
> =
  | {
      base?: StyleProps;
      variants?: V;
      defaultVariants?: Partial<NVDefaultVariantProps<V>>;
    }
  | {
      slots: S;
    };
