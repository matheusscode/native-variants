import {
  type NVDefaultVariantProps,
  type NVOptions,
  type StyleProps,
} from "@/interfaces/lib";
import { DefaultTheme } from "@/providers/theme-provider";
import { useTheme } from "@/providers/use-theme";
import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "./responsive";

const defaultTheme = {};

/**
 * Function to create styles for components, with support for theming and responsive design.
 *
 * @template V - Type of variant styles.
 * @template S - Type of the resulting style object.
 *
 * @param {NVOptions<V, S> | ((theme: DefaultTheme, wp: typeof responsiveWidth, hp: typeof responsiveHeight) => NVOptions<V, S>)} options - An object that defines base styles, variant styles, and default variants for the component or a function that returns such an object based on the current theme.
 *
 * @returns {(props: Partial<VariantProps<V>>) => S} A function that takes partial variant properties and returns a style object.
 *
 * @example
 * // Without Theme:
 * const tabsWithoutTheme = nv((wp, hp) => ({
 *   slots: {
 *     tabs_list: {
 *       display: "flex",
 *       width: "100%",
 *       flexDirection: "row",
 *       justifyContent: "space-between",
 *       gap: 2,
 *       marginBottom: hp(4),
 *     },
 *     tab: {
 *       paddingHorizontal: wp(20),
 *       paddingVertical: hp(6),
 *       fontSize: 13,
 *       display: "flex",
 *       flexDirection: "row",
 *       textAlign: "center",
 *       justifyContent: "center",
 *       alignItems: "center",
 *       gap: 2,
 *     },
 *     panel: {
 *       paddingVertical: hp(14),
 *       display: "flex",
 *       flexDirection: "column",
 *       width: "100%",
 *       height: "auto",
 *     },
 *   },
 * }));
 *
 * @example
 * // With Theme:
 * const tabsWithTheme = nv((theme, wp, hp) => ({
 *   slots: {
 *     tabs_list: {
 *       display: "flex",
 *       width: "100%",
 *       flexDirection: "row",
 *       justifyContent: "space-between",
 *       gap: 2,
 *       marginBottom: hp(4),
 *       backgroundColor: theme.colors.primary, // Example usage of theme
 *     },
 *     tab: {
 *       paddingHorizontal: wp(20),
 *       paddingVertical: hp(6),
 *       fontSize: 13,
 *       display: "flex",
 *       flexDirection: "row",
 *       textAlign: "center",
 *       justifyContent: "center",
 *       alignItems: "center",
 *       gap: 2,
 *     },
 *     panel: {
 *       paddingVertical: hp(14),
 *       display: "flex",
 *       flexDirection: "column",
 *       width: "100%",
 *       height: "auto",
 *     },
 *   },
 * }));
 *
 * @example
 * // Creating avatar variants with base styles and size variants
 * const avatarVariants = av({
 *   base: {
 *     position: "relative",
 *     display: "flex",
 *     justifyContent: "center",
 *     alignItems: "center",
 *     flexDirection: "column",
 *     borderRadius: 50,
 *     overflow: "hidden",
 *   },
 *   variants: {
 *     size: {
 *       default: {
 *         width: 50,
 *         height: 50,
 *       },
 *       xl: {
 *         width: 100,
 *         height: 100,
 *       },
 *       lg: {
 *         width: 70,
 *         height: 70,
 *       },
 *       sm: {
 *         width: 40,
 *         height: 40,
 *       },
 *     },
 *   },
 *   defaultVariants: {
 *     size: "default",
 *   },
 * });
 *
 * // Using avatarVariants to get styles for a specific size
 * const styles = avatarVariants({ size: "lg" });
 */
export function nv<
  V extends Record<string, Record<string, StyleProps>>,
  S extends Record<string, StyleProps>,
>(
  options: Partial<
    | NVOptions<V, S>
    | ((
        theme: DefaultTheme,
        wp: typeof responsiveWidth,
        hp: typeof responsiveHeight,
      ) => NVOptions<V, S>)
  >,
) {
  return (props: Partial<NVDefaultVariantProps<V>>): S => {
    let theme: DefaultTheme | undefined;

    if (typeof options === "function") {
      const result =
        options.length === 3
          ? options(
              useTheme() as DefaultTheme,
              responsiveWidth,
              responsiveHeight,
            )
          : options(responsiveWidth, responsiveHeight);

      options = result;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      theme = defaultTheme;
    }

    const isSlots = "slots" in options;
    let styles: Record<string, StyleProps> = {};

    if (isSlots) {
      const { slots } = options as { slots: Record<string, StyleProps> };
      for (const [slotKey, slotValue] of Object.entries(slots)) {
        styles[slotKey] = { ...slotValue };
      }
    } else {
      const {
        base = {},
        variants,
        defaultVariants = {},
      } = options as {
        base?: StyleProps;
        variants?: V;
        defaultVariants?: Partial<NVDefaultVariantProps<V>>;
      };

      styles = { ...base } as any;

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

      for (const [variantKey, variantValue] of Object.entries(
        defaultVariants,
      )) {
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
    }

    return StyleSheet.create({ style: styles }).style as S;
  };
}
