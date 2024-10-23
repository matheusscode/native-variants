import {
  OptionParams,
  SlotDefaultVariants,
  StyleProps,
  VariantOptions,
} from "@/interfaces/lib";
import { DefaultTheme, useTheme } from "@/providers";
import { responsiveHeight, responsiveWidth } from "@/utils/responsive";
import { unique } from "./unique";

const defaultTheme = {};

/**
 * Generates a set of unique style functions for multiple variant slots, supporting theme, width, and height.
 *
 * @template V - A record where each key is a variant slot and each value contains the base styles and variant definitions.
 * @param {V | ((params: OptionParams) => V)} definitions -
 * Variant definitions or a function that receives parameters like `theme`, `width`, and `height` to return the variant options for each slot.
 * @returns {(props: Partial<Record<keyof V, Partial<SlotDefaultVariants<V>>>>) =>
 *   { [K in keyof V]: (props: Partial<Record<keyof V[K]["variants"], keyof V[K]["variants"][keyof V[K]["variants"]]>>) => Record<string, StyleProps> }} -
 * A function that returns a record of style generators for each variant slot.
 *
 * @example
 * const avatarVariants = slots({
 *   avatar: {
 *     base: { borderRadius: 50, overflow: "hidden" },
 *     variants: {
 *       size: {
 *         small: { width: 50, height: 50 },
 *         large: { width: 100, height: 100 },
 *       },
 *     },
 *     defaultVariants: { size: "small" },
 *   },
 * });
 *
 * const styles = avatarVariants({ avatar: { size: "large" } });
 */
export function slots<
  V extends Record<
    string,
    VariantOptions<Record<string, Record<string, StyleProps>>>
  >,
>(
  definitions: V | ((params: OptionParams) => V),
): (props: Partial<Record<keyof V, Partial<SlotDefaultVariants<V>>>>) => {
  [K in keyof V]: (
    props: Partial<
      Record<
        keyof V[K]["variants"],
        keyof V[K]["variants"][keyof V[K]["variants"]]
      >
    >,
  ) => Record<string, StyleProps>;
} {
  return (props: Partial<Record<keyof V, Partial<SlotDefaultVariants<V>>>>) => {
    let theme: DefaultTheme;
    const _props: OptionParams = {
      width: responsiveWidth,
      height: responsiveHeight,
    };

    if (typeof definitions === "function") {
      theme = useTheme();
      if (theme) {
        _props.theme = theme as DefaultTheme;
      }
      definitions = definitions(_props);
    } else {
      theme = defaultTheme;
    }

    const instances = Object.fromEntries(
      Object.entries(definitions).map(([key, options]) => [
        key,
        unique(options),
      ]),
    ) as unknown as {
      [K in keyof V]: (
        props: Partial<
          Record<
            keyof V[K]["variants"],
            keyof V[K]["variants"][keyof V[K]["variants"]]
          >
        >,
      ) => Record<string, StyleProps>;
    };

    const defaultVariants = Object.fromEntries(
      Object.entries(definitions).map(([key, options]) => [
        key,
        options.defaultVariants,
      ]),
    ) as {
      [K in keyof V]: {
        [VariantKey in keyof V[K]["variants"]]: keyof V[K]["variants"][VariantKey];
      };
    };

    return Object.fromEntries(
      Object.entries(instances).map(([key, instance]) => {
        const mergedProps = { ...defaultVariants[key], ...props[key] };
        return [key, instance(mergedProps)];
      }),
    ) as {
      [K in keyof V]: (
        props: Partial<
          Record<
            keyof V[K]["variants"],
            keyof V[K]["variants"][keyof V[K]["variants"]]
          >
        >,
      ) => Record<string, StyleProps>;
    };
  };
}
