import { OptionParams, StyleProps, VariantOptions } from "@/interfaces/lib";
import { DefaultTheme, useTheme } from "@/providers";
import { responsiveHeight, responsiveWidth } from "@/utils/responsive";
import { StyleSheet } from "react-native";

const defaultTheme = {} as DefaultTheme;

/**
 * Generates unique styles based on variant options or a function returning options.
 *
 * @template V - A record where each key is a variant and each value is a record of style props.
 * @template S - The resultant style object created from the variant and base styles.
 * @param {VariantOptions<V> | ((params: OptionParams) => VariantOptions<V>)} options -
 * Variant options or a function that accepts parameters like `theme`, `width`, and `height` to return variant options.
 * @returns {(props: Partial<Record<keyof V, keyof V[keyof V]>>): S} -
 * A function that generates the final style object based on provided variant props.
 *
 * @example
 * const avatarStyle = unique({
 *   base: { width: 100, height: 100 },
 *   variants: {
 *     size: {
 *       small: { width: 50, height: 50 },
 *       large: { width: 150, height: 150 },
 *     },
 *   },
 *   defaultVariants: { size: "small" },
 * });
 *
 * const style = avatarStyle({ size: "large" });
 */
export function unique<
  V extends Record<string, Record<string, StyleProps>>,
  S extends Record<string, StyleProps>,
>(options: VariantOptions<V> | ((params: OptionParams) => VariantOptions<V>)) {
  return (props: Partial<Record<keyof V, keyof V[keyof V]>>): S => {
    let theme: DefaultTheme;
    const _props: OptionParams = {
      width: responsiveWidth,
      height: responsiveHeight,
    };

    // Handle function case where options depend on parameters
    if (typeof options === "function") {
      theme = useTheme();
      if (theme) {
        _props.theme = theme as DefaultTheme;
      }
      options = options(_props);
    } else {
      theme = defaultTheme;
    }

    let styles: Record<string, StyleProps> = {};

    const {
      base = {},
      variants,
      defaultVariants = {},
    } = options as VariantOptions<V>;

    // Apply base styles
    styles = { ...base } as never;

    /**
     * Retrieve the variant styles based on the key and value.
     *
     * @param {K} variantKey - The key of the variant.
     * @param {R} variantValue - The value of the variant key.
     * @returns {StyleProps | undefined} - The corresponding style props for the variant.
     */
    const getVariantStyles = <
      K extends keyof V,
      R extends keyof V[K] | undefined,
    >(
      variantKey: K,
      variantValue: R,
    ) => {
      const variantStyles = variants?.[variantKey];
      return variantStyles
        ? variantStyles[variantValue as keyof V[K]]
        : undefined;
    };

    for (const [variantKey, variantValue] of Object.entries(defaultVariants)) {
      const variantStyles = getVariantStyles(
        variantKey as keyof V,
        variantValue as keyof V[typeof variantKey] as any,
      );
      if (variantStyles) {
        Object.assign(styles, variantStyles);
      }
    }

    for (const [variantKey, variantValue] of Object.entries(props)) {
      const variantStyles = getVariantStyles(
        variantKey as keyof V,
        variantValue as keyof V[typeof variantKey] as any,
      );
      if (variantStyles) {
        Object.assign(styles, variantStyles);
      }
    }

    return StyleSheet.create({ style: styles }).style as S;
  };
}
