import {
  type NVDefaultVariantProps,
  type NVOptions,
  type StyleProps,
} from "@/interfaces/lib";
import { DefaultTheme } from "@/providers/theme-provider";
import { useTheme } from "@/providers/use-theme";
import { StyleSheet } from "react-native";

const defaultTheme = {};

/**
 * Creates a styled component with support for variants and slots.
 *
 * This function allows you to define styles for components with an option to specify
 * variants and slots. It also supports a theming mechanism via a theme provider.
 *
 * @template V - A record of variant styles where each key represents a variant and
 *               maps to its respective styles.
 * @template S - A record of slot styles where each key represents a slot and maps
 *               to its respective styles.
 *
 * @param {NVOptions<V, S> | ((theme: DefaultTheme) => NVOptions<V, S>)} options -
 *        An object that defines the styles, variants, and slots for the component,
 *        or a function that returns such an object based on the current theme.
 *
 * @returns {(props: Partial<NVDefaultVariantProps<V>>) => S} A function that takes
 *          an object of variant properties and returns the corresponding styles
 *          for the component, including any base styles, variant styles, or
 *          styles defined in the slots.
 *
 * @example
 * const tabs = av({
 *   slots: {
 *     tabs_list: {
 *       display: "flex",
 *       width: "100%",
 *       flexDirection: "row",
 *       justifyContent: "space-between",
 *       gap: 2,
 *       marginBottom: 4,
 *     },
 *     tab: {
 *       paddingHorizontal: 20,
 *       paddingVertical: 6,
 *       fontSize: 13,
 *       display: "flex",
 *       flexDirection: "row",
 *       textAlign: "center",
 *       justifyContent: "center",
 *       alignItems: "center",
 *       gap: 2,
 *     },
 *     panel: {
 *       paddingVertical: 14,
 *       display: "flex",
 *       flexDirection: "column",
 *       width: "100%",
 *       height: "auto",
 *     },
 *   },
 * });
 *
 * const { tabs_list, tab, panel } = tabs({});
 */
export function nv<
  V extends Record<string, Record<string, StyleProps>>,
  S extends Record<string, StyleProps>,
>(options: NVOptions<V, S> | ((theme: DefaultTheme) => NVOptions<V, S>)) {
  return (props: Partial<NVDefaultVariantProps<V>>): S => {
    let theme;
    if (typeof options === "function") {
      theme = useTheme();
      options = options(theme as DefaultTheme);
    } else {
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
